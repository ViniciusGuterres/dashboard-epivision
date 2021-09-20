import React from 'react';

import FormCadastro from '../FormCadastro.jsx';

// just test
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from 'react-router-dom';

export default function Main(props) {

    return (
        <main style={{
            background: '#fff',
            gridArea: 'main',
            minHeight: '80vh',
            padding: '30px'
        }}>
            <FormCadastro
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
                            inputType: 'select'
                        },
                    ]
                }
            />
        </main>
    )
};
