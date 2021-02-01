import React, { Componentm, useState, useEffect } from "react";
import BounceLoader from "react-spinners/BounceLoader";
import { StyledLoader } from "./styles";

function AppLoader(props) {
    return <BounceLoader css={StyledLoader}
        size={150}
        color={"#123abc"}
        loading={true}></BounceLoader>;
}

export default AppLoader;
