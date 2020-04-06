import styled from "styled-components";
export const StyledLoader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fdfdfd;
    z-index: 99;
    .spinner {
        width: 50px;
        height: 50px;
      }
      .double-bounce1, .double-bounce2 {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: #333;
          opacity: 0.6;
          top: 0;
          left: 0;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
          -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
          -moz-animation: sk-bounce 2.0s infinite ease-in-out;
          animation: sk-bounce 2.0s infinite ease-in-out;
      }
      .double-bounce2 {
          -webkit-animation-delay: -1.0s;
          -moz-animation-delay: -1.0s;
          animation-delay: -1.0s;
      }
`;