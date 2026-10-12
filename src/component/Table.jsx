import React from "react";
import "./Table.css"

const Table=(props)=>{
    return(
        <section className="book-table">
            <h2>{props.tableheading}</h2>
            <a href="">{props.tableBtn}</a>
        </section>
    )
}
export default Table;