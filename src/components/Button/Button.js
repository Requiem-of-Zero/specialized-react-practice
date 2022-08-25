import React from "react";
import { ButtonWrapper, ButtonLink } from "./Button.styles";

const Button = ({ url, ctaTxt, opensNewTab, color }) => {
  const handleClick = () => {
    if (opensNewTab) {
      return "_blank";
    } else {
      return "_self";
    }
  };

  const handleBgColor = () => {
    if (color === "primary") {
      return "#FFF";
    } else if (color === "secondary") {
      return "transparent";
    } else if (color === "primary_blk_brdr") {
      return "tranparent";
    }
  };

  const handleTextColor = () => {
    if (color === "primary") {
      return "black";
    } else if (color === "secondary") {
      return "#FFF";
    } else if (color === "primary_blk_brdr") {
      return "black";
    }
  };

  const handleHoverColor = () => {
    if (color === "primary_blk_brdr") {
      return "#e6e6e6";
    }
  };

  return (
    <ButtonWrapper
      color={handleBgColor()}
      border={handleTextColor()}
      hover={handleHoverColor()}
    >
      <ButtonLink href={url} color={handleTextColor()} target={handleClick()}>
        {ctaTxt}
      </ButtonLink>
    </ButtonWrapper>
  );
};

export default Button;
