import React from "react";
import "./Special.css";

const Special=(props)=>{
    return(
        <section className="package">
            <h2 className="text-center">{props.specialheading}</h2>
            <img src={props.specialimg} alt="" className="packimg"/>
            <div className="white">
                <h3>{props.specialoffer}</h3>
                <p>{props.specialpara}</p>
                <a href="">{props.specialBtn}</a>
            </div>
        </section>
    )
}
export default Special;