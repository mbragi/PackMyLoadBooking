import Styled from "styled-components";
import Check from "assets/img/check.svg"

export const Illustration = Styled.div`
    height: 648px;
    width: 600px; 
    background-color: #F9FAFF;
    display: flex;
    flex-direction: column;
    align-items: flex-start;  
    box-shadow: 0px 3px 20px #00000008;
    border-radius: 5px 0px 0px 5px;
    box-sizing: border-box;
    opacity: 1;
    .logo{
        margin: 26px 0 105px 26px;
    }
  svg {
    margin: 0 auto;
  }
  @media only screen and (max-width: 720px) {
    width: 100vw;
    height: auto;
    display: none;
    svg {
        width: inherit;
        height: 160px;
      }
      .logo{
        width: initial;
        /* margin-bottom: 35px !important;
        height: initial; */
    }
      img {
        width: inherit;
      }
    }
`;

export const FormContainer = Styled.div`
    height: 648px; 
    width: 600px;
    padding: 78px 38px 41.5px 36px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    h1{
        font-size: 26px;
        color: #2E384D;
        font-weight: 600;
        margin: 0;
    }
    h4{
        font-size: 14px;
        color: #2E384D;
        font-weight: 300;
        margin: 10px auto 36px auto;
        width: 449px;
        line-height: 1.3;
    }
    @media only screen and (max-width: 720px) {
        width: 100vw;
        height: auto;
        padding: 40px 28px 0 28px;
        h4{
            width: auto !important;
        }
        h1{
            width: auto !important;
        }
    }
`;

export const RadioContainer = Styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: ${(props) => props.wrap ? "wrap" : "nowrap"};
    & > *{
        margin: 10px 14px;
    }
    input[type=checkbox]:not(old):checked + label:before, 
    input[type=radio]:not(old):checked + label:before, 
    input[type=checkbox]:not(old):checked + span + label:before, 
    input[type=radio]:not(old):checked + span + label:before {
        content: url(${Check});
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 24px;
        font-size: 1.5rem;
        color: #acd373;
    }
    @media only screen and (max-width: 720px) {
        & > *{
            margin: 7px 12px;
        }
    input[type=checkbox]:not(old):checked + label:before, 
    input[type=radio]:not(old):checked + label:before, 
    input[type=checkbox]:not(old):checked + span + label:before, 
    input[type=radio]:not(old):checked + span + label:before {
        content: url(${Check});
        position: absolute;
        right: 10px;
        top: 4px;
        font-size: 1.5rem;
        color: #acd373;
    }
    }
    .checkbox {
        display: flex;
        input[type="checkbox" i]{
            visibility: hidden;
        }
        label{
            position: relative;
            width: 203px;
            height: 73px;
            background: rgba(77, 183, 254, 0.1) 0% 0% no-repeat padding-box;
            border-radius: 20px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            padding: 0 61px 0 21px;
            h3{
                font-size: 14px;
                font-weight: 700;
                color: #305F72;
                margin: 0;
                text-align: initial;
            }
            svg{
                margin-right: 18px;
            }
            @media only screen and (max-width: 720px) {
                h3{
                    font-size: 12px;
                }
                width: 239px;
                height: 73px;
                padding: 0 20px;
            }
        }
    }
    .radio{
        display: flex;
        flex-direction: column;
        input[type="radio" i]{
            visibility: hidden;
        }
        label{
            position: relative;
            width: 160px;
            height: 160px;
            background: #FFFFFF 0% 0% no-repeat padding-box;
            box-shadow: 0px 3px 6px #272D3B33;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            h3{
                font-size: 26px;
                font-weight: 500;
                color: #272D3B;
                margin: 0;
                margin-top: 12px;
            }
        }
    @media only screen and (max-width: 720px){
        label{
            width: 150px;
            height: 150px;
            h3{
                font-size: 23px;
            }
            img{
                height: 60px;
            }
        }
    }
    }
`;
