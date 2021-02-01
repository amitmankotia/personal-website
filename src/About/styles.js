import styled from "styled-components";
export const StyledAbout = styled.div`
    position: relative;
    height: 100%;
    min-height: 550px;
    padding: 20PX;
    background-repeat: no-repeat;
    background-position: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -ms-background-size: cover;
    background-size: cover;
    ul{
        display: flex;
    }
    > div{
        padding: 20px 0;
        flex:1;
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
  
`;
