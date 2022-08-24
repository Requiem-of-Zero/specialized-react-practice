import React from 'react'
import { CategorySectionsContainer, CategorySectionsWrapper } from './CategorySections.styles';
import CategorySection from '../CategorySection/CategorySection';
import model from './data/model';

const CategorySections = ({sections}) => {
  return (
    <CategorySectionsWrapper>
        <CategorySectionsContainer>
            {model.map((section, i) => {
                const key = 'category_sections-' + i;
                return <li>
                    <CategorySection {...section} key={key}/>
                </li>
            })}
        </CategorySectionsContainer>
    </CategorySectionsWrapper>
  )
}

export default CategorySections