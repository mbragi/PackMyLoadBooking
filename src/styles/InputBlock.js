import styled, { css } from "styled-components";

const InputBlock = styled.input`
background: #E0E7FF33;
box-shadow: 0px 3px 6px #00000005;
border-radius: 5px;
opacity: 1;
font-size: 13px;
box-sizing: border-box;
border: 1px solid #E0E7FF;
padding: 15px 14px;
width: 100%;
max-width: 486px;
height: 40px;
&::placeholder {
    color: #8c98a97d;
    font-weight: 500;
  }
  &:focus {
    border: 2px solid #c6cde2;
  }
  ${(props) =>
    props.error &&
    css`
      background-color: #ffe3e3;
      border: 2px solid #e12d39;
      color: #e12d39;
      &:focus {
        border-color: #e12d39;
      }
    `}
`;

InputBlock.Label = styled.label`
  font-family: "Montserrat";
  display: block;
  color: #8C98A9;
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 10px;
  ${(props) =>
    props.hide &&
    css`
      display: none;
    `}
`;

InputBlock.Container = styled.div`
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 486px;
  &.inline {
    display: flex;
    flex-direction: row;
    align-items: center;
    label {
      margin-bottom: 0;
    }
    input {
      margin-left: 10px;
    }
  }
  ${(props) =>
    props.fullWidth &&
    css`
      max-width: 100%;
    `}
    ${(props) =>
    props.width &&
    css`
        width:  ${props.width};
      `}
  
`;

InputBlock.ErrorText = styled.span`
  display: block;
  font-size: 15px;
  color: firebrick;
  font-weight: bold;
  padding-left: 10px;
  margin-top: 10px;
`;


export default InputBlock;