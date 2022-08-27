import React from "react";
import {
  CategorySectionsContainer,
  CategorySectionsWrapper,
} from "./CategorySections.styles";
import CategorySection from "../CategorySection/CategorySection";

const CategorySections = ({ sections }) => {

  return (
    <CategorySectionsWrapper>
      <CategorySectionsContainer>
            <li>
              <CategorySection section={sections}/>
            </li>
      </CategorySectionsContainer>
    </CategorySectionsWrapper>
  );
};

export default CategorySections;
