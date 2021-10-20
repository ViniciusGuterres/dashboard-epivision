import React from "react";

// styled Component
import styledComponents from './Dashboard';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVirus } from '@fortawesome/free-solid-svg-icons';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import ApexChart from "../../components/ApexChat";

const {
    MainContainerCards,
    Card,
    CardTitle,
    ContainerLineChart
} = styledComponents;

export default class Dashboard extends React.Component {

    render() {
        return (
            <>
                <MainContainerCards>
                    <InfoCards
                        title={'Casos de Covid'}
                        data={54}
                        icon={faVirus}
                        themeColor={'#34951c'} />

                    <InfoCards
                        title={'Funcionários cadastrados'}
                        data={30}
                        icon={faUser}
                        themeColor={'#3b6270'} />

                    <InfoCards
                        title={'Funcionários grupo de risco'}
                        data={2}
                        icon={faExclamation}
                        themeColor={'#c91010c7'} />
                </MainContainerCards>

                <ContainerLineChart>
                    <div
                        style={{
                            height: '20%',
                            borderBottom: '1px solid #00000042',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <span style={{marginLeft: '20px'}}>Progresso do covid</span>
                    </div>

                    <ApexChart />
                </ContainerLineChart>
            </>
        )
    }
}

function InfoCards(props) {

    return (
        <Card>
            <div
                style={{
                    display: "flex",
                    flexDirection: 'column',
                    height: '100%',
                    width: '100%',
                }}
            >
                <CardTitle>{props.title || ''}</CardTitle>
                <span style={{ fontSize: '13px' }}>{props.data || ''}</span>
            </div>

            <FontAwesomeIcon
                style={{
                    marginTop: '10px',
                    fontSize: '25px',
                    color: props.themeColor || ''
                }}
                icon={props.icon || ''}
            />
        </Card>
    )
}