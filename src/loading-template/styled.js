import styled from "styled-components";

export const StyledSkeleton = styled.article`
    width: 100%;
    background-color: #f6f6f6;
}
`;

export const SkeletonHeader = styled.section`
    height: 70px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    > div{
        margin: 20px;
    }
`;

export const SkeletonBody = styled.section`
    height: 450px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-content: center;
    margin: auto;
    > div{
        align-self: center;
    }
`;
