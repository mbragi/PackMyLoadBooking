import React, { useState } from "react";
import styled, { css } from "styled-components";

export default function Card(props) {
  const { tabs, noBodyPadding, itemMargin, fontSize, activeColor, noTabPadding, distribution, distributionMobile } = props;
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <CardBlock {...props}>
      {/* {loading && (
        <CardBlock.Loader>
          <Loader />
        </CardBlock.Loader>
      )} */}
      {tabs && tabs.length > 0 && (
        <CardBlock.Tabs
          fontSize={fontSize} activeColor={activeColor} noTabPadding={noTabPadding}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`tab-title ${activeTabIndex === index ? "active" : ""
                }`}
              onClick={() => setActiveTabIndex(index)}
            >
              {tab.title}
            </button>
          ))}
        </CardBlock.Tabs>
      )}
      <CardBlock.Body noPadding={noBodyPadding} itemMargin={itemMargin} distribution={distribution} distributionMobile={distributionMobile}>
        {tabs && tabs.length > 0
          ? tabs[activeTabIndex].content
          : props.children}
      </CardBlock.Body>
    </CardBlock>
  );
}


const CardBlock = styled.div`
  display: flex;
  flex-direction: column;
  color: #000;
  background-color: #fff;
  box-shadow: 0px 3px 20px #00000008;
  border-radius: 5px;
  height: auto;
  width: auto;
  max-width: 100%;
  min-height: 150px;
  box-sizing: border-box;
  position: relative;
  overflow: auto;
  ${(props) =>
    props.bg &&
    css`
      background-image: url(${props.bg});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    `}
  ${(props) =>
    props.boxShadow &&
    css`
      box-shadow: ${props.boxShadow};
  `}
  ${(props) =>
    props.bgColor &&
    css`
      background-color: ${props.bgColor};
    `}
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
  ${(props) =>
    props.loading &&
    css`
      opacity: 0.5;
    `}
  ${(props) =>
    props.width &&
    css`
      width: ${props.width}px;
    `}
  ${(props) =>
    props.minWidth &&
    css`
      min-width: ${props.minWidth}px;
    `}
  ${(props) =>
    props.maxWidth &&
    css`
      max-width: ${props.maxWidth}px;
    `}
  ${(props) =>
    props.height &&
    css`
      height: ${props.height}px;
    `}
  ${(props) =>
    props.minHeight &&
    css`
      min-height: ${props.minHeight}px;
    `}
  ${(props) =>
    props.maxHeight &&
    css`
      max-height: ${props.maxHeight}px;
    `}
    ${(props) =>
    props.marginLeft &&
    css`
        margin-left: ${props.marginLeft}px;
      `}
    ${(props) =>
    props.marginRight &&
    css`
        margin-right: ${props.marginRight}px;
      `}
    ${(props) =>
    props.marginBottom &&
    css`
        margin-bottom: ${props.marginBottom}px;
      `}
    ${(props) =>
    props.marginTop &&
    css`
        margin-top: ${props.marginTop}px;
      `}
      ${(props) =>
    props.paddingLeft &&
    css`
          padding-left: ${props.paddingLeft}px;
        `}
      ${(props) =>
    props.paddingRight &&
    css`
          padding-right: ${props.paddingRight}px;
        `}
      ${(props) =>
    props.paddingBottom &&
    css`
          padding-bottom: ${props.paddingBottom}px;
        `}
      ${(props) =>
    props.paddingTop &&
    css`
          padding-top: ${props.paddingTop}px;
        `}
        ${(props) =>
    props.padding &&
    css`
                padding: ${props.padding}px;
              `}
    ${(props) =>
    props.flex &&
    css`
        flex: ${props.flex};
      `}
  @media only screen and (max-width: 720px) {
    ${(props) =>
    props.bgMobile &&
    css`
        background-image: url((${props.bgMobile});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      `}
    ${(props) =>
    props.marginRightMobile &&
    css`
        margin-right: ${props.marginRightMobile}px;
      `}
    ${(props) =>
    props.flexMobile &&
    css`
        flex: ${props.flexMobile};
      `}
    ${(props) =>
    props.widthMobile &&
    css`
        width: ${props.widthMobile}px;
      `}
    ${(props) =>
    props.minWidthMobile &&
    css`
        min-width: ${props.minWidthMobile}px;
      `}
    ${(props) =>
    props.maxWidthMobile &&
    css`
        max-width: ${props.maxWidthMobile}px;
      `}
    ${(props) =>
    props.heightMobile &&
    css`
        height: ${props.heightMobile};
      `}
    ${(props) =>
    props.minHeightMobile &&
    css`
        min-height: ${props.minHeightMobile}px;
      `}
    ${(props) =>
    props.maxHeightMobile &&
    css`
        max-height: ${props.maxHeightMobile}px;
      `}
      ${(props) =>
    props.marginLeftMobile &&
    css`
          margin-left: ${props.marginLeftMobile}px;
        `}
      ${(props) =>
    props.marginBottomMobile &&
    css`
          margin-bottom: ${props.marginBottomMobile}px;
        `}
      ${(props) =>
    props.marginTopMobile &&
    css`
          margin-top: ${props.marginTopMobile}px;
        `}
  }
`;

CardBlock.Tabs = styled.div`
  display: flex;
  padding: 0 30px;
  padding-bottom: 0;
  border-bottom: 1px solid #a3adc821;
  font-size: 18px;
  .tab-title {
    font-family: "Poppins";
    color: #BBC5D5;
    padding-bottom: 15px;
    padding-top: 25px;
    background-color: inherit;
    border: none;
    margin: 0;
    margin-right: 15px;
  }
  .tab-title.active {
    color: #11141A;
    border-bottom: 2px solid #F36F20;
    ${(props) =>
    props.activeColor &&
    css`
        color: ${props.activeColor};
        border-bottom: 2px solid ${props.activeColor};
    `}
  }
  ${(props) =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize};
  `}
  ${(props) =>
    props.noTabPadding &&
    css`
    padding: ${props.noTabPadding};
  `}
`;

CardBlock.Body = styled.div`
  padding-top: 25px;
  padding-bottom: 0;
  position: relative;
  box-sizing: border-box;
  flex-grow: 1;
  display: flex;
  ${(props) =>
    props.noPadding &&
    css`
      padding: 0 !important;
    `}
    ${(props) =>
    props.itemMargin &&
    css`
          & > * {
            margin: 23px 5px;
          }
        `}
    ${(props) =>
    props.distribution &&
    css`
    flex-direction: ${props.distribution};
        `}
  @media only screen and (max-width: 720px) {
    ${(props) =>
    props.distributionMobile &&
    css`
    flex-direction: ${props.distributionMobile};
        `}
    padding: 20px;
  }
`;

CardBlock.Loader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1.2;
`;
