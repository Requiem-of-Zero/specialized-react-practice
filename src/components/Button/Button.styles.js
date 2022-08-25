import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ border }) => border};
  border-radius: 8px;
  background-color: ${({ color }) => color};
  min-width: 100px;
  cursor: pointer;

  &:hover {
    background-color: ${({ hover }) => hover};
    transition: all 0.25s ease;
  }
`;

export const ButtonLink = styled.a`
  color: ${({ color }) => color};
  text-decoration: none;
  padding: 1rem 0.75rem;
  margin: 0 auto;
`;
