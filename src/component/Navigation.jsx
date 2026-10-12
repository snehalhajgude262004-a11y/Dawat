import React from "react";
import "./Navigation.css";

const Navigation = (props) => {
  return (
    <section className="container-fluid navtop">
      <div className="container">
        <div className="row up ">
          <div className="col-lg-4 mainlogo d-none d-lg-block ">
            <img src={props.logo} alt="mainlogo" />
          </div>
          <div className="col-lg-7 d-none d-lg-block">
            <ul>
              {props.links.map((links, index) => (
                <li key={index}>
                  <a href="">{links}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-1 d-none d-lg-block">
            <i className={props.navBtn}></i>
          </div>
        </div>
      </div>
      <div className="d-lg-none row mobile-nav ">
          <div className="col-10">
            <img src={props.logo} alt="mainlogo" />
          </div>
          <div className="col-2">
            <i className={props.navlist}></i>
          </div>
        </div>
      <div className="hero">
        <h2>{props.heroheading}</h2>
        <h1>{props.heroheading2}</h1>
        <a href="">{props.heroBtn}</a>
      </div>
    </section>
  );
};
export default Navigation;
