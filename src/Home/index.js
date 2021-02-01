import React, { Componentm, useState, useEffect } from "react";
import { StyledHome } from "./styles";
import typer from 'typer-js';
import loadingImage from '../images/loading.gif';
import errorImage from '../images/error.png';

const Home = ({
    profileImagePath,
    bgImage
}) => {
    useEffect(() => {
        const element = document.querySelector('.title');
        typer(element)
            .line("I CREATE AWESOME WEB STUFF");
    }, []);
    return <StyledHome id="home" bgImage={bgImage} >
        <div>
            <img
                placeholder={loadingImage}
                src={profileImagePath}
                error={errorImage}
                alt="profile-pic"
            />
        </div>
        <h1 className="into"><span>Hello,</span> I'm Amit Mankotia. <h2 className="title"></h2></h1>

    </StyledHome>;
};

export default Home;
