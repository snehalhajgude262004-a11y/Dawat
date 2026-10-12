import React from "react";
import "./Story.css" 
const Story=(props)=>{
    return(
        <section className="our px-1 ">
           
             <h2>{props.storyheading}</h2>
            
                <div className="row p-4 ">
                    <p className="col-lg-6 pad ">{props.storypara}</p>
                    <p className="col-lg-6 pad1">{props.storypara2}</p>
                </div> 
           
           <img src={props.storyimg} alt="" />   
        </section>
    )
}
export default Story;