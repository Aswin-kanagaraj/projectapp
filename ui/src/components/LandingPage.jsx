import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LandingPage.css";
import Webdevelop1 from "../assets/webdevelop1.jpg";
import Home_avtar from "../assets/home-right.png.svg";
import { HOST } from "./authpage/LoginPage";
import Cookies from "js-cookie";
import axios from "axios";
import { Blog } from "./authpage/blogCreation";

const LandingPage = () => {
  let userRole = Cookies.get("userRole");

  const logOut = () => {
    axios.post(`${HOST}/api/auth/logout`).then(() => {
      Cookies.remove("accessToken");
      Cookies.remove("userRole");
      Cookies.remove("userId");
    });
  };

  return (
    <>
      <header className="header">
        <div className="content navbar">
          <div className="logo">
          </div>
          <nav>
            <ul>
              <li>
                <a href="#home">home</a>
              </li>
              <li>
                <a href="#intro">about</a>
              </li>
              
              <li>
                <a href="#products1">Products</a>
              </li>
              <li>
                <a href="#services1">service</a>
              </li>
              
              <div className="drop">
                <li>
                  <a href="#blog">blog</a>
                </li>
              </div>
              <li>
                <a href="#contact">contact</a>
              </li>
              <li>
                <a href={"login"}>Login</a>
              </li>
              {userRole && userRole === "admin" && (
                <li>
                  <a href={"blogcreat"}>Create Blog</a>
                </li>
              )}
              {/* {userRole && userRole === "admin" && ( */}
                <li>
                  <a href={"singup"}>Create User</a>
                </li>
              {/* )} */}
              {userRole && userRole === "admin" && (
                <li>
                  <a
                    href="/"
                    onClick={(e) => {
                      logOut();
                    }}
                  >
                    Log Out
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>

      <section className="content landingpage" id="home">
        <div className="left left-content">
          <div className="head">
            <div>
              <h3>Wellcome To Quironam Solution's</h3>
              <p style={{ fontSize: "17px", textAlign: "left" }}>
                At Qurinom Solutions, we're your trusted partner for all things
                digital. We're here to empower your business and drive your
                success in the digital age. With our expert team, cutting-edge
                technologies, and a passion for innovation, we offer a
                comprehensive suite of services tailored to meet your web
                development and digital marketing needs.
              </p>
            </div>
          </div>
        
        </div>
        <div className="right forgot">
          <img src={Home_avtar} alt="" />
        </div>
      </section>
      <section className="intro" id="intro">
        <div className="left forgot">
          <img src={Webdevelop1} alt="" />
        </div>
        <div className="right">
          <div className="about">
            <div className="ml-5">
              <h2>About Our Company</h2>
              <div className="mt-0" style={{ marginLeft: "10px" }}>
                <p style={{ fontSize: "17px" }} className="ml-5">
                  Enhancing connectivity through digital transformation and App
                  development solutions
                </p>
                <p style={{ fontSize: "17px" }}>
                  Our customer-friendly approach keeps us moving ahead in the
                  process of serving unique and compelling designs. We are here
                  to serve a never-forgetting experience to your customers.
                </p>
              </div>{" "}
            </div>
          </div>
        </div>
      </section>
            <section className="offers" id="products1">
        <div className="headline">
          <h1>Our Products</h1>
          <p id="servicetext">
            Because we know that your beauty is first and foremost a matter of
            trust,we are committed to providing you with the answers to your
            questions about our products and their ingredients. For ingredients,
            we provide you with information on what they are, where they come
            from, how they work and how they are used in our formulas.
          </p>
        </div>
        <div className="offer-content">
          <div className="offer-img">
            <h2> QHR</h2>
            <p>
              We provide special short-term courses to all to enhance hospital
              management skills, clinical skills, patients.
            </p>
          </div>

          <div className="offer-img">
            {/* <img src={s2} alt="" /> */}
            <h2>Biscuit</h2>
            <p>
              A camera-video-social app for everyone to showcase themselves and
              make their worth known with camera...
            </p>
          </div>

          <div className="offer-img">
            <h2>Storeflaunt</h2>
            <p>
              If we have a problem or need a new product in these hectic times,
              we look it up online. Most of us are either unaware of it...
            </p>
          </div>
        </div>
      </section>
      <div  className="headline" id="blog">
      <h1>Blogs</h1>
        <Blog />
      </div>
      <section className="offers" id="services1">
        <div className="headline">
          <h1>service offers</h1>
          <p id="servicetext">
            All of our services hinge around our promise of delivering brand
            awareness, traffic and leads by bringing content, marketing and
            sales together. Each of our Business Hubs feed into whichever
            digital marketing service that you require.
          </p>
        </div>
        <div className="offer-content">
          <div className="offer-img">
            <h2> UI/UX Design</h2>
            <p>
              Our uncut range of UI/UX Solutions adheres to delivering a
              signature digital experience by means of compelling designs...
            </p>
          </div>

          <div className="offer-img">
            <h2>Product Devolopment</h2>
            <p>
              We are shaping your business idea into a user-friendly, high-end
              mobile application both for Android and iOS. Our applications
              are...
            </p>
          </div>

          <div className="offer-img">
            <h2>Digital Markating</h2>
            <p>
              In the age of viral and trends, we create and promote brands with
              better ROI driven online marketing solutions covering a...
            </p>
          </div>

          <div className="offer-img">
            <h2>Digital Transformation</h2>
            We empower your business transformation to take advantage of
            technology and digital assets across the enterprise...
          </div>
          <div className="offer-img">
            <h2>Health Care</h2>
            <p>
              Qurinom Health Connect ensures connecting hospitals with the right
              medical staff by providing promising healthcare staff...
            </p>
          </div>
          <div className="offer-img">
            <h2>Cloud Migration</h2>
            <p>
              Qurinom Solutions make sure that your company’s assets are
              migrated to Clouds by analyzing and transferring your data...
            </p>
          </div>
          <div className="offer-img">
            <h2>IT Consulting</h2>
            <p>
              Qurinom Solutions is a one-stop solution for all your complex
              business problems relating to IT Consultancy. We craft...
            </p>
          </div>
          {/*  */}
        </div>
      </section>
    </>
  );
};

export default LandingPage;
