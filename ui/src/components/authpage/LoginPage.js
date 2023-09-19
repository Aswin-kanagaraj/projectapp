import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./login.css";
import axios from "axios";
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css";
 export const HOST = 'http://localhost:5000';
export const Loginpage = () => {
  const navigate = useNavigate();
  const [loginvalue, setloginvalue] = useState({ useremail: "", password: "" });
  const [alert, setAlert] = useState(false);
  const loginDatails = (e) => {
    e.preventDefault();
    axios.post(`${HOST}/api/auth/login`, loginvalue).then((respone)=>{
      const data = respone.data
      Cookies.set("accessToken",data.token.accessToken)
      Cookies.set("userRole",data.user.role)
      Cookies.set("userId",data.user.id)
      console.log(data)
    }).then(()=>navigate('/'))
    setloginvalue({ useremail: "", password: "" });
  };

  return (
    <div> 
      <div
        className="row"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <div className="col-md-5 mt-4">
          <div className="card">
            <div class="card-body bodyclass1">
              <h4 className="text-center">LOGIN !</h4>
              <form
                onSubmit={(e) => {
                  loginDatails(e);
                }}
              >
                {alert ? (
                  <div className="text-danger">Invalid Credential</div>
                ) : null}
                <div>
                  <div className=" mt-5">
                    <b style={{ fontSize: "15px" }}>USER NAME</b> : &nbsp;
                    {/* <BiSolidUserCircle className="iconstyle" />{" "} */}
                    <input
                      className="textbx"
                      type="text"
                      value={loginvalue.useremail}
                      onChange={(e) =>
                        setloginvalue({
                          ...loginvalue,
                          [e.target.name]: e.target.value,
                        })
                      }
                      name="useremail"
                      placeholder="enter useremail"
                    />
                  </div>
                 
                  <div className=" mt-3">
                    <b style={{ fontSize: "15px" }}>POSSWORD</b> : &nbsp;
                    <input
                      className="textbx"
                      type="password"
                      placeholder="enter password"
                      value={loginvalue.password}
                      onChange={(e) =>
                        setloginvalue({
                          ...loginvalue,
                          [e.target.name]: e.target.value,
                        })
                      }
                      name="password"
                    />
                  </div>
                  <div>
                    <button className="btn btn-secondary mt-2" type="submit">
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
