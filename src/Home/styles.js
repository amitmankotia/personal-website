import styled from "styled-components";
import img from '../images/bg-3.jpg';
export const StyledHome = styled.div`
    position: relative;
    height: 100vh;
    text-align: center;
	background: url(${img}) no-repeat center center fixed;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
    a{
        bottom: 50px;
    }
    h1 {
        font-size: 34px;
        margin: 36px 0 22px;
        color: #fff;
        span{
            color: red;
        }
    }
    .title {
        margin: 10px 0;
        font-size: 22px;
        color: #bfbfbf;
        text-transform: uppercase;
    }
`;