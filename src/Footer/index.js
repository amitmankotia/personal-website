import React from "react";
import { StyledAbout } from "./styles";

function About(props) {

    return (
        <StyledAbout {...props}>
            <div className="footer">
                <div className="row">
                    <a href="index.html" className="effect footer-title">Amit</a>

                    <div className="footer-social">
                        <ul className="footer-social-list">
                            <li><a className="effect" href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a className="effect" href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a className="effect" href="#"><i className="fa fa-pinterest-p"></i></a></li>
                            <li><a className="effect" href="#"><i className="fa fa-linkedin"></i></a></li>
                            <li><a className="effect" href="#"><i className="fa fa-behance"></i></a></li>
                            <li><a className="effect" href="#"><i className="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>

                    <p className="copy-text">Amit &copy; 2020.</p>
                </div>
            </div>
        </StyledAbout>
    );
}

export default About;