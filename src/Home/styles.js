import styled from "styled-components";
import img from '../images/bg-3.jpg';
export const StyledHome = styled.div`
    position: relative;
    height: 75vh;
    text-align: center;
    background: ${({ bgImage }) => `url(${bgImage}) no-repeat center center;`}
    opacity: 0.9;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
    background-size: cover;
    vertical-align: middle;
    padding-top: 15%;
    z-index: 5;
    > div{
        width: 180px;
        height: 180px;
        margin: 0 auto;
        border: solid 3px #dfdfdf;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        overflow: hidden;
        border-radius: 50%;
        img{
            width: 180px;
        }
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
        color: white;
        text-transform: uppercase;
    }
`;
