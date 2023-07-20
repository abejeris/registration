import React from 'react'
import { StyledButton, StyledLogo } from './Button.style'

const Button = ({logo, textColor, backgroundColor, borderColor}) => {
  return (
    <StyledButton textColor={textColor} backgroundColor={backgroundColor} borderColor={borderColor}>{logo && <StyledLogo src={logo}/>}sign up</StyledButton>
  )
}

export default Button;