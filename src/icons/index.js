import React, { Componentm, useState, useEffect } from "react";
import { StyledIcon } from './styles';
export const FacebookIcon = ({
    fill = "#FFF",
    viewBox = "0 0 20 20",
    onMouseDown,
    align
}) => (
        <StyledIcon
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
            </svg>
        </StyledIcon>

    );

export const GmailIcon = props => {
    return (
        <StyledIcon>
            <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd">
                <path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm6.001 16.917c.552 0 .999-.448.999-.999v-7.919c0-.551-.448-.999-.999-.999h-12.002c-.551 0-.999.448-.999.999v7.919c0 .551.448.999.999.999h12.002zm-6.001-3.55l-5.45-3.782-.011 6.748h10.899v-6.748l-5.438 3.782zm5.174-5.784c-1.527 1.064-5.174 3.634-5.174 3.634l-5.203-3.634h10.377z" />
            </svg>
        </StyledIcon>

    );
};

export const LinkedinIcon = props => {
    return (
        <StyledIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
            </svg>
        </StyledIcon>

    );
};
