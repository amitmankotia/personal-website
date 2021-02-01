import React, { Componentm, useState, useEffect } from "react";
import {StyledContactForm} from './styles';
export const ContactForm = () => (<StyledContactForm id="contact-form" method="post" action="mail/contact.php">
    <input type="text" name="name" id="name" required="required" placeholder="Name" />
    <span></span>
    <input type="email" name="email" id="email" required="required" placeholder="Email" />
    <span></span>
    <textarea name="message" id="message" required="required" placeholder="Message"></textarea>
    <span className="message-error"></span>
    <div id="form-message"></div>
    <button type="submit">Send Message</button>
</StyledContactForm>);
