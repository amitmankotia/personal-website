import styled from "styled-components";
export const StyledHeader = styled.div.attrs(({ top }) => {
  return top>=60 ? {
  style: {
    backgroundColor: '#fff',
    padding: '6px 0 !important',
    borderBottom: '1px solid #f0f0f0',
    color: '#333',
    
  }
}: {
  style:{
    color: '#ddd',
    backgroundColor: 'transparent'
  }
}})
`
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: space-between;
  z-index: 20;
  position: fixed;
  padding: 20px;
  box-sizing: border-box;
  img{
    height:  50px;
    width: 50px;
    top: -15px !important;
    position: relative;

  }

  nav{
    width: 400px;
    display: flex;
    justify-content: flex-end;
  }
  & ul{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    li{
      position: relative;
      font-size: 13px;
      font-weight: 700;
    }
  }
`;