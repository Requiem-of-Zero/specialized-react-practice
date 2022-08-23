import styled from 'styled-components';

export const CategorySectionWrapper = styled.div`
    width: 100%;
`

export const CategorySectionContainer = styled.div`
  font-size: 12px;
  letter-spacing: 1px;
`;

export const CategorySectionList = styled.ul`
  line-height: 15px;
  display: flex;
  flex-direction: column;
  list-style: none;
  >li {
    margin-bottom: 10px;
  }
  `;

export const CategorySectionLink = styled.a`
  text-decoration: none;
  color: #121212;
  &:hover{
    color: #ed1c24;
    transition: all 0.25s ease;
  }
`;
export const CategorySectionHeaderLink = styled.a`
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  padding: 3px 0 7px;
  color: #121212;
  &:hover {
    color: #ed1c24;
    transition: all 0.25s ease;
  }
`;
