import React from 'react';

import styledComponents from '../components/FormCadastro'
const {
    Form,
    InputContainer,
    InputRowContainer,
    Label,
    Input,
    TitleContainer,
    InputCheckboxRowContainer,
    InputCheckbox
} = styledComponents

export default function FormCadastro(props) {

    function unlockInput(event) {
        const eventOption = event.options || '';

        console.log(event.target.options[event.target.selectedIndex].value);
    }

    function layoutForCheckboxInput(inputType, label, index) {

        switch (inputType) {
            case 'text':
                return (
                    <InputRowContainer key={`form-input: ${index}`}>
                        <Label>{label}</Label>

                        <Input type={inputType} />
                    </InputRowContainer>
                )

            case 'checkbox':
                return (
                    <InputCheckboxRowContainer>
                        <Label>{label}</Label>
                        <InputCheckbox type={inputType} />
                    </InputCheckboxRowContainer>
                )

            case 'select':
                return (
                    <InputCheckboxRowContainer>
                        <Label for="vacina">{label}</Label>

                        <select
                            name="vacina"
                            onChange={event => unlockInput(event)}
                        >
                            <option value="não tomou vacina">Não tomou vacina</option>
                            <option value="pfizer">Pfizer</option>
                            <option value="coronaVac">CoronaVac</option>
                            <option value="johnson">Johnson & Johnson</option>
                            <option value="astrazeneca">AstraZeneca</option>
                            <option value="sputinikv">Sputnix V</option>
                        </select>
                    </InputCheckboxRowContainer>
                )

            default:
                return null;
        }

    }

    function renderInputs() {
        const formContents = props.formContents || [];

        return formContents.map((content, index) => {
            const label = content.label || '';
            const inputType = content.inputType || '';

            return (
                <>
                    {layoutForCheckboxInput(inputType, label, index)}
                </>
            )
        })

    };

    return (
        <Form>
            <TitleContainer>
                <span>{props.title || ''}</span>
            </TitleContainer>

            <InputContainer>
                {renderInputs()}
            </InputContainer>

            <input type="submit" />
        </Form>
    )
}