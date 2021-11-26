import React from 'react';

// Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartPie } from '@fortawesome/free-solid-svg-icons'

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
                    {/* Dashboard Links */}
                    <Li>
                        {/* Chart Pie icon */}
                        <FontAwesomeIcon
                            icon={faChartPie}
                            style={{marginRight: '10px'}}
                        />

                        {/* Dashboard Link */}
                        <Link
                            to="/"
                            style={{ textDecoration: 'none', color: '#fff' }}
                        >
                            Dashboard
                        </Link>
                    </Li>

                    <Li>
                        <Link
                            to="/cadastroFuncionario"
                            style={{ textDecoration: 'none', color: '#fff' }}>
                            Cadastrar colaborador
                        </Link>
                    </Li>

                    <Li>
                        <Link
                            to="/listaDeFuncionarios"
                            style={{ textDecoration: 'none', color: '#fff' }}>
                            Lista de colaboradores
                        </Link>
                    </Li>

                    <Li>
                        <Link
                            to="/historicoDeViolacoes"
                            style={{ textDecoration: 'none', color: '#fff' }}>
                            Histórico de colaborador sem máscara
                        </Link>
                    </Li>
                </Ul>
            </nav>
        </Aside>
    )
}

