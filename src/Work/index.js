import React from "react";
import { StyledWork } from "./styles";

function Work(props) {
    return (
        <StyledWork {...props}>
            <div id="work" className="div one-page-div">
                <div className="container">
                    <div className="div-title">
                        <h2>My Portfolio</h2>
                    </div>

                    <div className="row">
                        <div className="col-xs-12">
                            <ul id="work-list" className="text-center">
                                <li className="main-color">
                                    <a href="#" className="filter  effect">all</a>
                                </li>
                                <li className="main-color">
                                    <a href="#" className="filter effect" data-filter=".web">web</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </StyledWork>
    );
}

export default Work;