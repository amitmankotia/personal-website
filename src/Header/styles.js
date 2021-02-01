import styled from "styled-components";
export const StyledHeader = styled.div`
a{
  display: flex;
}
display: flex;
justify-content: space-between;
align-items: center;
width: 100vw;
min-height: 6vh;
box-sizing: border-box;
background-color: #ffffff;
transition: top .3s ease-in;
  z-index: 20;
  position: fixed;
  padding: 5px 20px;
  box-sizing: border-box;
  img{
    height:  50px;
    width: 50px;
    position: relative;

  }
  a{
    flex:1;
  }
  nav{
    flex:2;
    display: flex;
  }
  & ul{
    width: 450px;
    display: flex;
    justify-content: space-evenly;
    li{
      position: relative;
      font-size: 13px;
      font-weight: 700;
      opacity: 0.5;
      :hover, :focus{
        opacity: 1;
      }
    }
  }
`;
