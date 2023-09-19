import axios from "axios";
import React, { useState, useEffect } from "react";
import "./login.css";
import { HOST } from "./LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
export const Createuser = () => {
  const [userReg, setuserReg] = useState({
    useremail: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${HOST}/api/auth/register`, userReg).then(() => navigate("/"));
    setuserReg({ useremail: "", password: "", userrole: "" });
  };

  return (
    <div>
      <div
        className="row"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <div className="col-md-6 col-lg-5 mt-4">
          <div className="card ">
            <div class="card-body bodyclass1">
              <h4 className="text-center">USER REGISTRATION</h4>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                  <div className=" mt-5">
                    <label style={{ fontWeight: "bold" }}>USER EMAIL:</label>
                    &nbsp;&nbsp;
                    <input
                      type="text"
                      name="useremail"
                      value={userReg.useremail}
                      onChange={(e) => {
                        const { name, value } = e.target;
                        setuserReg({ ...userReg, [name]: value });
                      }}
                      className="textbx"
                      placeholder=" enter user email"
                      autoComplete="off"
                    />{" "}
                  </div>
                  <div className=" mt-2">
                    <label style={{ fontWeight: "bold" }}>USER Role:</label>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                      type="text"
                      name="userrole"
                      value={userReg.userrole}
                      onChange={(e) => {
                        const { name, value } = e.target;
                        setuserReg({ ...userReg, [name]: value });
                      }}
                      className="textbx"
                      placeholder=" enter user Role"
                      autoComplete="off"
                    />{" "}
                  </div>
                  <div className="mt-2">
                    <label style={{ fontWeight: "bold" }}>PASSWORD:</label>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                      type="text"
                      name="password"
                      value={userReg.password}
                      onChange={(e) => {
                        const { name, value } = e.target;
                        setuserReg({ ...userReg, [name]: value });
                      }}
                      className="textbx"
                      placeholder="enter password "
                    />
                  </div>
                </div>
                <button className="btn btn-secondary mt-2">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
