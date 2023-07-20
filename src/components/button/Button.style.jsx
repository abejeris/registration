
import styled from 'styled-components';


export const StyledButton = styled.button `
display: flex;
align-items: center;
padding: 10px 50px;
background-color: ${props => props.backgroundColor};
color: ${props => props.textColor};
border: 2px solid ${props => props.borderColor};
border-radius: 5px;
cursor: pointer;
font-family: 'poppins';
font-size: 16px;
font-weight: 300;
box-shadow: 0px 0px 5px #d3d3d3;
`

export const StyledLogo = styled.img `
margin-right: 10px;
width: 18px;
`