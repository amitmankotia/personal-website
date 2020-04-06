import React from "react";
import { StyledAbout } from "./styles";

function About(props) {

    return (
        <StyledAbout {...props}>
            <div id="about" className="about-1 parallax one-page-div">
                <div className="about-container">
                    <div className='intro'>
                        <h1>Hi There! I'm Amit Mankotia</h1>
                        <p>I am a professional web designer from Bengaluru, India. I specialize in applications written in React.
                        In back-end development, I have worked on graphQL using NodeJS.
                        My current toolset includes React, Redux, TypeScript, Docker and all the other various libraries and technologies related to them.
                        </p>
                        <div>
                            <div>
                                <ul>
                                    <li><span><i class="fa fa-envelope"></i> Email : </span>amitmankotia129@gmail.com</li>
                                    <li><span><i class="fa fa-map-marker"></i> Location : </span>Bengaluru, INDIA.</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li><span><i class="fa fa-calendar"></i> Date of birth : </span>14 Oct 1990</li>
                                    <li><span><i class="fa fa-phone"></i> Phone : </span>+91-900-833-3040</li>
                                </ul>
                            </div>
                        </div>
                        <ul class="social-list">
                            <li><a href="#" class="effect"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#" class="effect"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#" class="effect"><i class="fa fa-google-plus"></i></a></li>
                            <li><a href="#" class="effect"><i class="fa fa-linkedin"></i></a></li>
                            <li><a href="#" class="effect"><i class="fa fa-instagram"></i></a></li>
                            <li><a href="#" class="effect"><i class="fa fa-pinterest-p"></i></a></li>
                        </ul>
                    </div>
                    <div>
                    <div className="skills">
                        <p className="progress-bar-text">HTML5, CSS3</p>
                        <div className="progress-cont">
                            <span className="main-color progress-bar-text">80%</span>
                        </div>
                        <div className="progress-bar-skills">
                        <div className="progress-bar-line main-color-bg" data-percent="98" style={{width: '98%'}}></div>
                        </div>
                    </div>
                    <div className="progress-bar-linear">
                        <p className="progress-bar-text">JAVASCRIPT</p>
                        <div className="progress-cont">
                            <span className="main-color progress-bar-text">85%</span>
                        </div>
                        <div className="progress-bar-skills">
                            <div className="progress-bar-line main-color-bg" data-percent="92" style={{width: '98%'}}></div>
                        </div>
                    </div>
                    <div className="progress-bar-linear">
                        <p className="progress-bar-text">REACT JS</p>
                        <div className="progress-cont">
                            <span className="main-color progress-bar-text">85%</span>
                        </div>
                        <div className="progress-bar-skills">
                            <div className="progress-bar-line main-color-bg" data-percent="86" style={{width: '98%'}}></div>
                        </div>
                    </div>
                    <div className="progress-bar-linear">
                        <p className="progress-bar-text">NODE JS</p>
                        <div className="progress-cont">
                            <span className="main-color progress-bar-text">80%</span>
                        </div>
                        <div className="progress-bar-skills">
                            <div className="progress-bar-line main-color-bg" data-percent="94" style={{width: '98%'}}></div>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </StyledAbout>
    );
}

export default About;