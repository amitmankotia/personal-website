import React from "react";
import { StyledLoader } from "./styles";

function Loader(props) {

    return (
        <StyledLoader {...props}>
                <div className="spinner center">
                    <div className="double-bounce1"></div>
                    <div className="double-bounce2"></div>
                </div>
        </StyledLoader>
    );
}

export default Loader;