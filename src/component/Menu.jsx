import React from "react";
import "./Menu.css";

const Menu = (props) => {
  return (
    <section className="menu-sec">
      <div>
        <h2 className="text-center pt-5 ">{props.menuheading}</h2>
        <nav>
          <ul className="timings">
            {props.menulist.map((menulist, index) => (
              <li key={index}>
                <a href="">{menulist.menulistname}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="d-lg-flex flex-lg-wrap">
          {props.menudata.map((menu, index) => (
            <figure key={index} className="d-flex">
              <img src={menu.foodimg} alt=""/> 
              <figcaption>
                <h3>{menu.foodheading}</h3>
                <span className="menu-price">{menu.foodprice}</span>
                <ul className="d-flex flex-wrap  recipe">
                  {menu.fooditems.map((item,i) => (
                    <li key ={i} className="p-1 ">{item}</li>
                  ))}
                </ul>
                </figcaption>
            </figure> 
      
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
