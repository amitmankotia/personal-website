import React, { Componentm, useState, useEffect } from "react";
import { StyledFooter } from "./styles";

const About = (props) => {

    return (
        <StyledFooter {...props}>
            <p>Amit &copy; 2020.</p>
        </StyledFooter>
    );
};

export default About;
