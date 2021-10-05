import React, { useEffect, useState, useMemo } from 'react'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

// Axios 
import { getDatas } from '../javascript/genericFuctions';
import employeesUrl from '../constants';
import axios from 'axios';

// Components
import Table from '../components/Table';

export default function EmployeesTable() {

  const [tableDatas, setTabledatas] = useState([]);

  useEffect(() => {

    (async () => {
      const result = await axios(employeesUrl);
      setTabledatas(result.data);
    })();
  }, [])

  const handleDatas = () => {
    const employeesDatas = tableDatas || [];

    return employeesDatas.map(employee => {
      // Handle Risk group icon
      const riskGroup = employee.riskGroup || '';
      const riskGroupIcon = riskGroup ?
        <FontAwesomeIcon
          icon={faCheckCircle}
          style={styles.iconPositive}
        /> :
        <FontAwesomeIcon
          icon={faTimesCircle}
          style={styles.iconNegative}
        />

      const employeeObj = {
        name: employee.name || '',
        registry: employee.registry || '',
        birthDate: employee.birthDate || '',
        department: employee.department || '',
        riskGroup: riskGroupIcon,
        vaccine: employee.vaccine || '',
        dose: employee.dose || '',
        edit: <FontAwesomeIcon icon={faEdit} style={styles.iconEdit}/>
          || ''
      }

      return employeeObj;
    })
  }

  const columns = useMemo(
    () => [
      {
        Header: "Colaboradores",
        columns: [
          {
            Header: "Matrícula",
            accessor: "registry"
          },
          {
            Header: "Nome",
            accessor: "name"
          },
          {
            Header: "Nascimento",
            accessor: "birthDate"
          },
          {
            Header: "Setor",
            accessor: "department"
          },
          {
            Header: "Vacina",
            accessor: "vaccine"
          },
          {
            Header: "Dose",
            accessor: "dose"
          },
          {
            Header: 'Grupo de Risco',
            accessor: 'riskGroup'
          },
          {
            Header: 'Editar',
            accessor: 'edit'
          }
        ]
      }
    ],
    []
  );

  return (
    <div>
      <Table
        columns={columns}
        data={handleDatas()}
      />
    </div>
  )
}

const styles = {
  iconPositive: {
    color: 'green',
    fontSize: '25px'
  },
  iconNegative: {
    color: 'red',
    fontSize: '25px'
  },
  iconEdit: {
    color: '#ff9900',
    fontSize: '25px',
    cursor: 'pointer'
  }
}