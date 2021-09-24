import GenericForm from '../components/GenericForm.jsx';

/**
 * @function EmployeeRegistration - View of the employee registration screen
 * @returns - node Element
 */
export default function EmployeeRegistration() {
    return (
        <GenericForm
            title={'Cadastro de colaborador'}
            formContents={
                [
                    {
                        label: 'Matricula',
                        inputType: 'text'
                    },
                    {
                        label: 'Nome',
                        inputType: 'text'
                    },
                    {
                        label: 'Matrícula',
                        inputType: 'number'
                    },
                    {
                        label: 'Nascimento',
                        inputType: 'text'
                    },
                    {
                        label: 'Setor',
                        inputType: 'text'
                    },
                    {
                        label: 'Grupo de risco',
                        inputType: 'checkbox'
                    },
                    {
                        label: 'Vacina',
                        inputType: 'vacina'
                    },
                ]
            }
        />
    )
};