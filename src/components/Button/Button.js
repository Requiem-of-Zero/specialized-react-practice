import React from "react";
import { ButtonWrapper } from "./Button.styles";
import { Link } from "react-router-dom";

const Button = ({ url, ctaTxt, opensNewTab, ctaStyle }) => {
  const handleNewTab = () => {
    const condition = false;
    if (opensNewTab) {
      condition = true;
    }
    return condition;
  };
  return (
    <ButtonWrapper>
      <a href="">{console.log(ctaTxt)}</a>
    </ButtonWrapper>
  );
};

export default ShopNow;
