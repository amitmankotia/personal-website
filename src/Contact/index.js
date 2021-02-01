import React, { Componentm, useState, useEffect } from "react";
import { StyledContact} from "./styles";
import {ContactForm} from './components/ContactForm';
import {ContactMe} from './components/ContactMe';
const Contact = (props) => {
    return (
        <StyledContact id="contact">
            <ContactMe />
            {/* <ContactForm /> */}
        </StyledContact >
    );
};

export default Contact;
