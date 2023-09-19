import React, { useState } from "react";
import axios from "axios";
import { HOST } from "./authpage/LoginPage";
import { useNavigate } from "react-router-dom";
export const AddBlog = () => {
  const [addblog, setaddblog] = useState(null);
  const [addblog1, setaddblog1] = useState(null);
const navigate = useNavigate();
  const handlesubmit = () => {
    const formData = new FormData();
    formData.append("file", addblog);
    formData.append("description", JSON.stringify(addblog1));
    axios.post(`${HOST}/api/file`, formData, { withCredentials: true }).then(()=>navigate('/'));
    setaddblog("");
  };

  return (
    <div className=" row" style={{ justifyContent: "center", alignItems: "center",}}>
      <form className=" col-md-6 blogimg">
        <div class="form-group">
          <label for="fileupload row text-bold">Upload Image</label>
          <input
            type="file"
            class="form-control"
            id="fileupload"
            onChange={(e) => setaddblog(e.target.files[0])}
          />
        </div>
        <div class="form-group row">
          <label for="contenet text-bold">Description</label>
          <div>
            <textarea
              class="form-control"
              id="contenet"
              placeholder="enter despctiption"
              name="description"
              onChange={(e) => setaddblog1(e.target.value)}
            />
          </div>
        </div>
        <button onClick={handlesubmit} className="mt-3">Submit</button>
      </form>
    </div>
  );
};
