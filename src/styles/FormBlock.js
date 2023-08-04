import styled from "styled-components";

const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: initial;
  justify-content: center;
  & > * {
    margin-right: 16px;
    margin-bottom: 16px;
    flex: 1;
  }
  /* & > *:last-child {
    margin-right: 0;
  } */
  @media only screen and (max-width: 520px) {
    flex-direction: column;
    & > * {
      margin-right: 0;
    }
  }
`;

export default FormBlock;
