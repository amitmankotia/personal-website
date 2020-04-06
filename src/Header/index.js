import React from "react";
import { StyledHeader } from "./styles";
import logo from '../images/logo.png'

function Header(props) {
    // const {top} = props;
    // if ( top >= 100 ) {
    //     this.addClass("nav-sticky");
  
    //   } else {
    //     this.removeClass("nav-sticky");
    //   }
    return (
        <StyledHeader {...props}>
             <img src={logo} className="App-logo" alt="logo" />
            <nav>
                <ul><li><a href="#home" className="scroll effect active" data-speed="800">HOME</a></li>
                    <li><a href="#about" className="scroll effect" data-speed="1000">ABOUT</a></li>
                    <li><a href="#work" className="scroll effect" data-speed="1400">WORK</a></li>
                    <li><a href="#contact" className="scroll effect" data-speed="1700">CONTACT</a></li>
                </ul>
            </nav>
        </StyledHeader>
    );
}

export default Header;