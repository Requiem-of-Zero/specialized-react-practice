import styled from "styled-components";

export const FooterContactWrapper = styled.div`
  max-width: 250px;
`;

export const InputHeader = styled.h5`
  color: white;
  margin-bottom: 0.75rem;
  letter-spacing: 0.5px;
`;

export const FooterInputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  margin-bottom: 0.75rem;
`;

export const FooterInputField = styled.input`
  height: 100%;
  outline: none;
  background-color: #414141;
  font-size: 14px;
  padding-left: 9px;
`;

export const FooterInputButton = styled.button`
  background-color: #c61017;
  color: white;
  width: 80px;
  height: 100%;
  border: 1px solid transparent;
  border-color: #c61017;
  cursor: pointer;
`;

export const FooterContactCaption = styled.p`
  color: #8e8e8e;
  font-size: 12px;
  letter-spacing: 0.3px;
  line-height: 1.25rem;
  padding-bottom: 30px;
  margin-bottom: 0.75rem;
`;

export const Terms = styled.a`
  margin-left: 5px;
  color: white;
`;

export const RetailerButton = styled.button`
  width: 100%;
  padding: 14px 0;
  font-size: 16px;
  background-color: #292929;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #c61017;
    transition: background-color 0.3s ease-out;
  }
`;
