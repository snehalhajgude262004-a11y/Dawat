
import React from "react";
import "./Latest.css";

const Latest = (props) => {
    return (
        <section className="latest-sec p-5">
            <div className="container">
                <h2 className="latest-heading text-center">
                    {props.Latestheading}
                </h2>

                <div className="latest-row">
                    {props.LatestData.map((news, index) => (
                        <div className="latest-card" key={index}>
                            <img
                                src={news.newsimg}
                                alt={news.newsheading}
                                className="latest-img"
                            />

                            <div className="latest-content">
                                <h3>{news.newsheading}</h3>

                                <p>{news.newspara}</p>

                                <div className="latest-meta">
                                    <span className="latest-date">
                                        {news.newsdate}
                                    </span>

                                    <span className="latest-comments">
                                        {news.newscomment}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Latest;
