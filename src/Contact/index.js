import React from "react";
import { StyledContact } from "./styles";

function Contact(props) {

    return (
        <StyledContact {...props}>
      <div id="contact" className="div one-page-div">
        <div className="container">
            <div className="div-title">
                <h2>contact me</h2>
            </div>

            <div className="row">
                <div className="col-xs-12 col-md-10 col-md-offset-1">
                    <div className="col-xs-12 col-sm-4">
                        <div className="contact-item mb-30">
                            <div className="c-icon text-center">
                                <i className="fa fa-phone"></i>
                            </div>
                            <div className="c-text">
                                <h5>PHONE</h5>
                                <h6>+91-900-833-3040</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-4">
                        <div className="contact-item mb-30">
                            <div className="c-icon text-center">
                                <i className="fa fa-map-marker"></i>
                            </div>
                            <div className="c-text">
                                <h5>Bengaluru,</h5>
                                <h6>India.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-4">
                        <div className="contact-item mb-30">
                            <div className="c-icon text-center">
                                <i className="fa fa-envelope"></i>
                            </div>
                            <div className="c-text">
                                <h5>EMAIL</h5>
                                <h6>amitmankotia129@gmail.com</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xs-12 col-md-10 col-md-offset-1">
                    <form id="contact-form" method="post" action="mail/contact.php">
                        <div className="col-sm-6">
                            <input type="text" name="name" id="name" className="input-field" required="required" placeholder="Name"/>
                            <span className="name-error text-center mb-30"></span>
                        </div>
                        <div className="col-sm-6">
                            <input type="email" name="email" id="email" className="input-field" required="required" placeholder="Email"/>
                            <span className="email-error text-center mb-30"></span>
                        </div>
                        <div className="col-xs-12">
                            <textarea name="message" id="message" className="input-field" required="required" placeholder="Message"></textarea>
                            <span className="message-error text-center mb-30"></span>
                        </div>
                        <div id="form-message" className="error mb-30 text-center"></div>

                        <button type="submit" className="effect submit-btn">Send Message</button>

                    </form>
                </div>
            </div> 
        </div> 
    </div>
    
        </StyledContact>
    );
}

export default Contact;