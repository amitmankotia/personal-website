import React, { Componentm, useState, useEffect } from "react";
import { StyledWork } from "./styles";

const Work = () => {
    return (
        <StyledWork>
            <div id="work">
                <h2>My Portfolio</h2>
                <ul id="work-list">
                    <li>
                        <a href="#" >all</a>
                    </li>
                    <li>
                        <a href="#">web</a>
                    </li>
                </ul>
            </div>

        </StyledWork>
    );
};

export default Work;
