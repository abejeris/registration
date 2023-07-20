import styled from 'styled-components'

export const StyledImageSide = styled.div`
    background-color: #f2877d;
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;
    width: 50%;

     img:first-child {
        width: 30%;
        padding: 30px;
     }

     img {
        padding: 0 50px;
        }

     h2 {
        text-align: center;
        color: white;
        width: 50%;
        margin: auto;
        font-family: poppins;
        font-weight: 400;
        padding: 20px;
     }
`;
