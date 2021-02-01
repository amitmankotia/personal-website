import React, { Componentm, useState, useEffect } from "react";
import { StyledHeader } from "./styles";
import '../../src/index.css';

const Header = ({
    logo
}) => {
    const [prevScrollpos, setPrevScrollpos] = React.useState(window.pageYOffset);
    // const [selectedpage, setSelectedpage] = useState(initialState);
    const handleScroll = () => {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-68px";
        }
        setPrevScrollpos(currentScrollPos);
    };
    const debouce = (fn, duration) => {
        let timeout;
        return () => {
            if (timeout) {
                clearTimeout(timeout);
            };
            timeout = setTimeout(fn, duration);
        };
    };
    const onTabClick = (e) => {

    };
    const debouncedScroll = debouce(handleScroll, 50);

    useEffect(() => {
        window.addEventListener('scroll', debouncedScroll);
        return () => (window.removeEventListener('scroll', debouncedScroll));
    });
    return <StyledHeader id="navbar" >
        <a href="#home"> <img src={logo} className="App-logo" alt="logo" /></a>
        <nav onClick={onTabClick}>
            <ul><li className={"active"}><a href="#home" >HOME</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#work">WORK</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
        </nav>
    </StyledHeader>;
};
const areEqual = (prevProps, nextProps) => true;
export default React.memo(Header, areEqual);
