import React, { useEffect, useState, useMemo } from 'react'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadSideMask } from '@fortawesome/free-solid-svg-icons';

// Axios 
import { getViolationsData } from '../javascript/crud';

// Components
import Table from '../components/Table';

export default function ViolationsHistory() {

  const [tableDatas, setTabledatas] = useState([]);

  // Geting all violationss and set at the tableDatas
  useEffect(() => {
    getViolationsData('http://localhost:3010/historyViolations')
      // .then(res => console.log('test', res))
      .then(res => setTabledatas(res))
  }, [tableDatas])

  // Handle datas to show at the table
  const handleDatas = () => {
    const violationsDatas = tableDatas || [];

    return violationsDatas.map(violations => {
      // handle with violations date and hours
      let day = violations.datahora.substr(8, 2);
      let month = violations.datahora.substr(5, 2);
      let year = violations.datahora.substr(0, 4);

      let hours = violations.datahora.substr(14, 2);
      let minutes = violations.datahora.substr(17, 2);
      let seconds = violations.datahora.substr(20, 2);

      const maskIcon =
        <FontAwesomeIcon icon={faHeadSideMask} style={styles.iconMaks} />

      // Mounting violations obj
      const violationsObj = {
        date: `${day}/${month}/${year}`,
        hour: `${hours}:${minutes}:${seconds}`,
        department: 'TI',
        maskIcon: maskIcon
        // department: violations.setor || '',
      }

      return violationsObj;
    })
  }

  const columns = useMemo(
    () => [
      {
        Header: "Histórico de colaboradores sem máscara",
        columns: [
          {
            Header: "Data",
            accessor: "date"
          },
          {
            Header: "hora",
            accessor: "hour"
          },
          {
            Header: "Setor",
            accessor: "department"
          },
          {
            Header: "Violação",
            accessor: "maskIcon"
          }
        ]
      }
    ],
    []
  );

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Table
        columns={columns}
        data={handleDatas()}
      />
    </div>
  )
}

const styles = {
  iconMaks: {
    color: 'red',
    fontSize: '20px',
    cursor: 'pointer'
  }
}