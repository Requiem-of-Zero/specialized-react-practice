import React from "react";
import {
  CategorySectionsContainer,
  CategorySectionsWrapper,
} from "./CategorySections.styles";
import CategorySection from "../CategorySection/CategorySection";
import model from "./data/model";

const CategorySections = ({ sections }) => {

  return (
    <CategorySectionsWrapper>
      <CategorySectionsContainer>
            <li>
              <CategorySection section={model}/>
            </li>
      </CategorySectionsContainer>
    </CategorySectionsWrapper>
  );
};

export default CategorySections;
