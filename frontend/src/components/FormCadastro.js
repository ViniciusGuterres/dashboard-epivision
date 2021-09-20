import styled from "styled-components";

const Form = styled.form`
    color: red;
    background-color: #fff;
    -webkit-box-shadow: 8px 10px 15px -6px rgba(0,0,0,0.65); 
    box-shadow: 8px 10px 15px -6px rgba(0,0,0,0.65);
    border-radius: 5px;
    width: 50%;
`

const InputContainer = styled.div`
    margin: 10px 30px 20px 30px;
`

const InputRowContainer = styled.div`
    color: black;
    margin-bottom: 10px;
`

const Label = styled.label`
    display: inline-block;
    font-size: 13px;
    margin-right: 20px;
`

const Input = styled.input`
    display: block;
    width: 100%;
    border: 1px solid #0000003d;
    border-radius: 4px;
    padding: 3px;
`

const InputCheckbox = styled.input`
    display: block;
    width: auto;
    cursor: pointer;
`

const TitleContainer = styled.div`
    background-color: rgba(33, 40, 50, 0.03);
    font-weight: 300;
    font-size: 20px;
    color: #2d27279c;
    padding: 20px;
`

const InputCheckboxRowContainer = styled.div`
    color: black;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`

const styledComponents = {
    Form,
    InputContainer,
    InputRowContainer,
    Label,
    Input,
    TitleContainer,
    InputCheckboxRowContainer,
    InputCheckbox
};

export default styledComponents;