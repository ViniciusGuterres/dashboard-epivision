import React from 'react';

// router
import { Link } from 'react-router-dom';

// styled components
import Modules from './MenuNav.js';
const { Aside, Li, Ul } = Modules;

export default function MenuNav(props) {

    return (
        <Aside>
            <nav>
                <Ul>
                    <Li>
                        <Link to="/cadastroFuncionario">Cadastrar colaborador</Link>
                    </Li>

                    <Li>
                        <Link to="/">Lista de colaboradores</Link>
                    </Li>

                </Ul>
            </nav>
        </Aside>
    )
}

