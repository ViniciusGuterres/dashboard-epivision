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
    ContainerLineChart,
    ContainerDonutChart,
    ContainerBarChart
} = styledComponents;

export default class Dashboard extends React.Component {

    render() {
        return (
            <div>
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

                <ContainerBarChart>
                    <div
                        style={{
                            height: '20%',
                            borderBottom: '1px solid #00000042',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '10px'
                        }}
                    >
                        <span style={{ marginLeft: '20px' }}>Progresso do covid</span>
                    </div>

                    <ApexChart
                        type={'bar'}
                        options={{
                            options: {
                                chart: {
                                    id: "basic-bar"
                                },
                                xaxis: {
                                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                                }
                            }
                        }}
                        series={
                            [
                                {
                                    name: "series-1",
                                    data: [30, 40, 45, 50, 49, 60, 70, 91]
                                }
                            ]
                        }
                    />
                </ContainerBarChart>

                {/* Donut and line chats */}
                <div
                    style={{ display: 'flex', width: '100%', height: '350px', gap: '20px' }}
                >
                    <ContainerDonutChart>
                        <div
                            style={{
                                height: '20%',
                                borderBottom: '1px solid #00000042',
                                display: 'flex',
                                alignItems: 'center',
                                padding: '10px'
                            }}
                        >
                            <span style={{ marginLeft: '20px' }}>Percentual de funcionários com covid</span>
                        </div>
                        <ApexChart
                            type='donut'
                            options={{}}
                            series={[44, 55, 41, 17, 15]}
                            labels={['A', 'B', 'C', 'D', 'E']}
                        />
                    </ContainerDonutChart>

                    <ContainerLineChart>
                        <div
                            style={{
                                height: '20%',
                                borderBottom: '1px solid #00000042',
                                display: 'flex',
                                alignItems: 'center',
                                padding: '10px'
                            }}
                        >
                            <span style={{ marginLeft: '20px' }}>Percentual de funcionários com covid</span>
                        </div>
                        <ApexChart
                            type='line'
                            options={{
                                options: {
                                    chart: {
                                        id: "basic-bar"
                                    },
                                    xaxis: {
                                        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                                    }
                                }
                            }}
                            series={
                                [
                                    {
                                        name: "series-1",
                                        data: [30, 40, 45, 50, 49, 60, 70, 91]
                                    }
                                ]
                            }
                        />
                    </ContainerLineChart>
                </div>
            </div>
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