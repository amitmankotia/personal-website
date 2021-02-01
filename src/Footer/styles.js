import styled from "styled-components";
export const StyledFooter = styled.div`
    padding-top: 60px;
    padding-bottom: 60px;
    // margin: 100px 100px;
    text-align: center;
    background-color: #f1f1f1;
    p{
        margin: 8px 0;
        font-size: 15px;
        text-transform: capitalize;
    }
    a{
        display: inline-block;
        margin-bottom: 6px;
        font-size: 22px;
        font-weight: 700;
        color: #111;
    }
    div{
        padding: 10px 0;
        ul{
            li{
                display: inline-block;
                a{
                    font-size: 17px;
                    color: #434343;
                    margin: 0 9px;
                    :hover{
                        color: #111;
                    }
                }

            }
        }
    }
`;
