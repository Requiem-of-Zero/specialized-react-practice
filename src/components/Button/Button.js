import React from "react";
import { ButtonWrapper } from "./Button.styles";

const Button = ({ url, ctaTxt, opensNewTab}) => {
  const handleClick = () => {
    if(opensNewTab){
      return '_self'
    } else {
      return '_blank'
    }
  }
  return (
    <ButtonWrapper>
      <a href={url} target={handleClick()}>
        {ctaTxt}
      </a>
    </ButtonWrapper>
  );
};

export default Button;
