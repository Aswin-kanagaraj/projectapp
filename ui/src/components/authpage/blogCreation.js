import React, { useEffect, useState } from "react";
import "./blog.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { HOST } from "./LoginPage";

export const Blog = () => {
  const [images, setImages] = useState([]);

  const getBlog = () => {
    axios.get(`${HOST}/api/file`).then((response) => {
      setImages(response.data);
    });
  };

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <div>
      {images.map((image, key) => (
        <div className="background" key={key}>
          <div className="row" style={{ justifyContent: "center", alignItems: "center" }}>
            <div className="card Light card mb-2 boxes" style={{ marginLeft: '20px', width: '70%' ,marginTop:'20px'}}>
              <div className="card-body pl-0 pr-0 pb-0 pt-0">
                <ul className="list-group" style={{justifyContent:'center' ,alignItems:'center'}}>
                  <img style={{width:'80%',padding:'10px 0px 10px 0px' }}  src={`${HOST}/api/file/${image._id}`} alt="finalimage" />
                </ul>
              </div>
            </div>
          </div>
          <div className="ml-5">
            <p style={{ textIndent: '40px', marginLeft: '20px', marginRight: '10px' ,fontSize:'17px'}}>
             {image.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
