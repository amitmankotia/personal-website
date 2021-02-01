import styled from "styled-components";
export const StyledContactForm = styled.form`
margin-top: 50px;
button{
    display: block;
	margin: 0 auto;
	padding: 8px 20px;
	font-size: 16px;
	font-weight: 700;
	border: 2px solid #333;
	outline: none;
	background-color: #333;
	color: #fafafa;
    cursor: pointer;
    :hover, :focus{
        color: #111;
	    background-color: transparent;
    }
}
#form-message{
    float: left;
    width: 100%;
    display: block;
    margin-top: 8px;
    font-size: 14px;
    color: #ff2828;
}
span{
    display: block;
    margin-top: 8px;
    font-size: 14px;
    color: #ff2828;
}
input{
    width: 100%;
    padding: 8px 16px;
    color: #232323;
    border: 1px solid #ddd;
    outline: none;
}
textarea{
    height: 190px;
    width: 100%;
    resize: none;
    padding: 8px 16px;
    color: #232323;
    border: 1px solid #ddd;
    outline: none;
}
`;
