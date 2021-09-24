import React, { useState } from 'react';

import styledComponents from './Form'
const {
    Form,
    InputContainer,
    InputRowContainer,
    Label,
    Input,
    TitleContainer,
    InputCheckboxRowContainer,
    InputCheckbox,
    ButtonSubmit
} = styledComponents

/**
 * @function GenericForm - Generic form with configurable labels and inputs type
 * @param {*} props 
 * @returns - node element
 */
export default function GenericForm(props) {

    const [isUnlockedInput, setIsUnlockedInput] = useState(false)

    function unlockInput(event) {
        const eventOption = event.target || '';

        if (eventOption.options[eventOption.selectedIndex].value !== 'não tomou vacina') {
            setIsUnlockedInput(true);
            console.log(isUnlockedInput);
        }
        if (eventOption.options[eventOption.selectedIndex].value === 'não tomou vacina') {
            setIsUnlockedInput(false);
            console.log(isUnlockedInput);
        }

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

            case 'vacina':
                return (
                    <div>
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

                        {
                            isUnlockedInput
                                ?
                                <InputCheckboxRowContainer>
                                    <Label for="dose">{label}</Label>

                                    <select
                                        name="dose"
                                    >
                                        <option value="1°">1°</option>
                                        <option value="2°">2°</option>
                                        <option value="3°">3°</option>
                                    </select>
                                </InputCheckboxRowContainer>
                                : null
                        }
                    </div>
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
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Form>
                <TitleContainer>
                    <span>{props.title || ''}</span>
                </TitleContainer>

                <InputContainer>
                    {renderInputs()}
                </InputContainer>

                <ButtonSubmit type="submit" >
                    Enviar
                </ButtonSubmit>
            </Form>
        </div>
    )
}