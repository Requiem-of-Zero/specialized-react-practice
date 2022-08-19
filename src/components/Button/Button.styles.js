import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 8px;
  background-color: ${({ color }) => color};
  min-width: 166px;
  cursor: pointer;
`;

export const ButtonLink = styled.a`
  color: ${({ color }) => color};
  text-decoration: none;
  padding: 1rem 2rem;
  margin: 0 auto;
`;
