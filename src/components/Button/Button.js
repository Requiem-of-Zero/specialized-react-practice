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
    }
  };

  const handleTextColor = () => {
    if (color === "primary") {
      return "black";
    } else if (color === "secondary") {
      return "#FFF";
    }
  };

  return (
    <ButtonWrapper color={handleBgColor()}>
      <ButtonLink href={url} color={handleTextColor()} target={handleClick()}>
        {ctaTxt}
      </ButtonLink>
    </ButtonWrapper>
  );
};

export default Button;
