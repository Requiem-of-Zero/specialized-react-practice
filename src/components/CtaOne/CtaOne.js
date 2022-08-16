import React from 'react'
import { CtaOneWrapper } from './CtaOne.styles';
import Button from '../Button/Button';
const CtaOne = ({subtitle, title, shopNowArgs, learnMoreArgs}) => {
  return (
    <CtaOneWrapper>
        <p>{subtitle}</p>
        <h1>{title}</h1>
        <Button className='cta_one__btn-primary' shopNowArgs={shopNowArgs} />
        <Button className='cta_one__btn-secondary' learnMoreArgs={learnMoreArgs}/>
    </CtaOneWrapper>
  )
}

export default CtaOne