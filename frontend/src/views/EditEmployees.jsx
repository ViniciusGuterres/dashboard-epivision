import GenericForm from '../components/genericForm/GenericForm.jsx';

export default function EditEmployees(props) {

    return (
        <div style={{display: 'flex', justifyContent: 'center', textAlign: 'center', height: '100%'}}>
            <GenericForm
                style={{height: '100%', width: '100%'   }}
                title={'Editar colaborador'}
                // submitDatas={() => {}}

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
                            label: 'Positivo para covid',
                            inputType: 'checkbox',
                            keyName: 'riskGroup'
                        },
                    ]
                }
            />
        </div>
    )
}