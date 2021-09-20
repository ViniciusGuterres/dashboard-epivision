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
                        Cadastrar colaborador
                    </Li>

                    <Li>
                        Lista de colaboradores
                    </Li>
                </Ul>
            </nav>
        </Aside>
    )
}

