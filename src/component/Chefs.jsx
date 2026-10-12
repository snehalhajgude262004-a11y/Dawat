import React from "react";
import "./Chefs.css"

const Chefs=(props)=>{
    return(
        <section className="chef">
            <h2>{props.chefsheading}</h2>
            <div>
                <div className="d-flex flex-wrap gap-5">
                    {props.chefdata.map((chefs,index)=>(
                        <figure key={index}>
                        <figcaption>
                            <img src={chefs.chefimg} alt="" className="m-lg-4" />
                            <h3 className="text-center">{chefs.chefname}</h3> 
                            <p className="text-center">{chefs.chefinfo}</p>
                        </figcaption>
                    </figure>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Chefs;