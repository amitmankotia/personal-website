import React, { Componentm, useState, useEffect } from "react";
import { FacebookIcon, GmailIcon, LinkedinIcon } from "../icons";
import { StyledAbout } from "./styles";
import { ContactMe } from '../Contact/components/ContactMe';

const About = () => {
    return (
        <StyledAbout id="about">
            <h2>Hi There!</h2>
            <p>
                I am a professional full stack web developer from Bengaluru, India. I specialize in
                applications written in React and ecosystem. For back-end development, I use graphQL in NodeJS.
      </p>

            <ul>
                <li>
                    <a href="https://www.facebook.com/amitmankotia1292">
                        <FacebookIcon />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/amitmankotia/">
                        <LinkedinIcon />
                    </a>
                </li>
                <li>
                    <a href="mailto:amitmankotia129.com">
                        <GmailIcon />
                    </a>
                </li>
            </ul>
            <ContactMe />
        </StyledAbout>
    );
};

export default About;
