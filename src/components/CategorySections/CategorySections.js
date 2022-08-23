import React from 'react'
import { CategorySectionsContainer, CategorySectionsWrapper } from './CategorySections.styles';
import CategorySection from '../CategorySection/CategorySection';
const CategorySections = ({sections}) => {
  return (
    <CategorySectionsWrapper>
        <CategorySectionsContainer>
            {sections.map((section, i) => {
                console.log(section)
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