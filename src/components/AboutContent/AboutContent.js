import React from "react";
import "./AboutContent.css";

const AboutContent = () => {
  return (
    <>
      {/* about content start */}
      <div className="about-content-container">
        <div className="about-top-content-container">
          {/* about breadcrumb */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Store</a>
              </li>

              <li className="breadcrumb-item active">About</li>
            </ol>
          </nav>
        </div>

        {/* About card */}
        <div className="about-card-container">
          <div className="about-card-banner">
            <img
              className="about-image-banner"
              src={require("../../img/img-about-banner.jpg")}
              alt="card-banner"
            />
          </div>

          <img
            className="about-logo"
            src={require("../../img/img-logo-2.png")}
            alt=""
          />

          <div className="about-card-content">
            <div className="about-description">
              <p>
                <strong>LARIST</strong> is a mini-project from Dibimbing
                course Full Stack Web Development Batch 3 by Cindy which making project e-commerce,
                a website in the fashion category. This website was created using
                a framework called{" "}
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                  ReactJs
                </a>{" "}
                as the client side using a framework called{" "}
                <a href="https://www.npmjs.com/package/express" target="_blank" rel="noopener noreferrer">
                  ExpressJs
                </a>{" "}
                as the server side. In the front-end side, the display is structured
                with CSS and{" "}
                <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
                  Bootstrap
                </a>{" "}
                (
                <a href="https://react-bootstrap.netlify.app/" target="_blank" rel="noopener noreferrer">
                  React-Bootstrap
                </a>
                ) so the writer can make the display becomes attractive and responsive using
                JavaScript to make the display more interactive for the user.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* about content end */}
    </>
  );
};

export default AboutContent;
