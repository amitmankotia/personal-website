import React, { Component } from "react";
import { StyledHome } from "./styles";
import typer from 'typer-js';
class Home extends Component {
    constructor() {
        super();
        this.state = {
            titleInfo : ''
        }
    }
    componentDidMount() {
        const element = document.querySelector('.title');
        typer(element)
            .line("I'M A WEB DEVELOPER")
            .line("I CREATE AWESOME WEB STUFF");
    }
    render() {
        return <StyledHome {...this.props}>
            <div id="home" className="home-1 parallax one-page-div">
                <div className="page-table">
                    <div className="table-cell text-center">
                        <div className="avatar-hero">
                            <img src={require("../images/profile.jpg")} alt="avatar-hero" />
                        </div>
                        <h1><span>Hi</span>, I'm Amit Mankotia</h1>
                        <h2 className="title"></h2>
                    </div>
                </div>
                <a href="#about" className="scroll home-s-btn hor-center"><span className="dot center"></span></a>
            </div>
        </StyledHome>
    }
};

export default Home;