import styled, { css } from "styled-components";

const ButtonBlock = styled.button`
  font-family: "Montserrat";
  background-color: #4DB7FE;
  border: none;
  border-radius: 6px;
  box-sizing: border-box;
  width: fit-content !important;
  height: 40px;
  color: #fff;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 13px 30px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  /* box-shadow: 0px 3px 6px #00000005; */
  ${(props) =>
    props.bold &&
    css`
      font-weight: 700;
    `}
  ${(props) =>
    props.center &&
    css`
      margin: 20px auto;
    `}
  ${(props) =>
    props.loading &&
    css`
      opacity: 0.5;
      cursor: wait;
    `}  
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100% !important;
    `}
  ${(props) =>
    props.long &&
    css`
      min-width: 272px;
      font-weight: 600;
    `}
  
  ${(props) =>
    props.small &&
    css`
      padding: 0 10px;
      font-size: 12px;
      min-width: 60px;
      height: 30px;
      ${(props) =>
        props.round &&
        css`
          border-radius: 15px;
        `}
    `}
    ${(props) =>
    props.medium &&
    css`
        padding: 0 2px;
        font-size: 14px;
        min-width: 140px;
        height: 35px;
        font-weight: 700;
        svg {
          height: 18px;
          width: 18px;
          margin-left: 3px;
          path {
            fill: #fff!important;
          }
        }
        ${(props) =>
        props.round &&
        css`
            border-radius: 15px;
          `}
      `}
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: #D3D3D3;
  }
`;

export default ButtonBlock;
