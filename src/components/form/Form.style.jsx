import styled from 'styled-components'

export const StyledForm = styled.div `


margin: auto;
    form {
        display: flex;
        flex-direction: column;

        .input {
            display: flex;
            flex-direction: column;
            position: relative;
            margin-bottom: 10px;

            label {
                font-family: poppins;
                padding: 5px 0;
                font-size: 18px;
            }

            input {
                height: 40px;
                border-radius: 5px;
                border: 2px solid #d3d3d3;
                box-shadow: 0px 0px 5px #d3d3d3;
                font-size: 18px;
                padding-left: 50px;
                color: #a9a9a9;
                font-weight: 100;
                
                &:focus {
                    outline: none;
                    border: 2px solid #f2877d;
                }
            }

            span {
                font-family: poppins;
                padding: 5px 0;
            }

            svg {
                width: 20px;
                height: 20px;
                position: absolute;
                left: 15px;
                top: 50px;
                g {
                    fill: #000;
                
                }
            }
        }
        button {
            padding: 10px;
            margin-top: 30px;
            border: 0px;
            border-radius: 5px;
            color: white;
            font-family: poppins;
            font-size: 20px;
            background-color: #f2877d;
    }

`;