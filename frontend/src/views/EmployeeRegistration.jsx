import GenericForm from '../components/genericForm/GenericForm.jsx';

/**
 * @function EmployeeRegistration - View of the employee registration screen
 * @returns - node Element
 */
export default function EmployeeRegistration() {
    return (
        <GenericForm
            title={'Cadastro de colaborador'}
            submitDatas={() => console.log('submited')}
            submitButtonName="Cadastrar"
            formContents={
                [
                    {
                        label: 'Matricula*',
                        inputType: 'text',
                        keyName: 'registry'
                    },
                    {
                        label: 'Nome*',
                        inputType: 'text',
                        keyName: 'name'
                    },
                    {
                        label: 'Nascimento',
                        inputType: 'text',
                        keyName: 'birthDate'
                    },
                    {
                        label: 'Setor*',
                        inputType: 'text',
                        keyName: 'department'
                    },
                    {
                        label: 'Grupo de risco',
                        inputType: 'checkbox',
                        keyName: 'riskGroup'
                    },
                    {
                        label: 'Vacina',
                        inputType: 'vacina',
                        keyName: 'vaccine',
                        subKeyName: 'dose'
                    },
                ]
            }
        />
    )
};