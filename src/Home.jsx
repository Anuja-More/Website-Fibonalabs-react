import React from "react";
import { NavLink } from "react-router-dom";
import img1 from "../src/Assests/img1.svg";
const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto ">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                  Hi there
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                  <strong className="brand-name"> I'M ANUJA MORE</strong>
                </h1>
                <h2 className="my-3">
                  A passionate Frontend Web Developer having an experience of
                  building Web applications with JavaScript / ReactjS.
                </h2>
                <div className="mt-3">
                  <NavLink to="/blog" className="btn-get-started ">
                    Get Started
                  </NavLink>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={img1}
                    className="img-fluid animated"
                    alt="About img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
