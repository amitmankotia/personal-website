import styled from "styled-components";
export const StyledAbout = styled.div`
    position: relative;
    height: 100%;
    min-height: 550px;
    background-image: url(../src/images/bg-2.jpg);
    background-repeat: no-repeat;
    background-position: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -ms-background-size: cover;
    background-size: cover;
    .about-container{
        display: flex;
        > div{
            padding: 20px;
            flex:1;
            &.intro{
                > div{
                    display: flex;
                    ul{
                        li{
                            margin-top: 8px;
                            font-size: 14px;
                            color: #666;
                            span{
                                font-weight: 700;
                            color: #232323;
                            }
                        }
                    }
                    > div{
                        flex: 1;
                    }
                }
            }
        }
    }
`;