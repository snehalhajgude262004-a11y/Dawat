
import React from "react";
import "./Footer.css";

const Footer = (props) => {
    const links = (props.footerlinks || "")
        .split(",")
        .map((link) => link.trim())
        .filter((link) => link !== "");

    return (
        <footer className="footer-sec  pt-5">
            <div className="footer-top pt-5">
                <img
                    src={props.Footerlogo}
                    alt="Dawat Restaurant Logo"
                    className="footer-logo"
                />

                <p className="footer-address">
                    {props.Footeraddress}
                </p>

                <a
                    href={`mailto:${props.Footermail}`}
                    className="footer-contact"
                >
                    {props.Footermail}
                </a>

                <a
                    href={`tel:${props.footertel}`}
                    className="footer-contact"
                >
                    {props.footertel}
                </a>
            </div>

            <div className="footer-divider"></div>

            <div className="footer-bottom">
                <ul className="footer-links">
                    {links.map((link, index) => (
                        <li key={index}>
                            <a
                                href={
                                    link.toLowerCase() === "contact"
                                        ? "#contact"
                                        : "#"
                                }
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>

                <p className="footer-text">
                    {props.footertext}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
