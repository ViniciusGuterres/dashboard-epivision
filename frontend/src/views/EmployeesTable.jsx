import React, { useEffect, useState, useMemo } from 'react'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

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
          style={style.iconPositive}
        /> :
        <FontAwesomeIcon
          icon={faTimesCircle}
          style={style.iconNegative}
        />

      const employeeObj = {
        name: employee.name || '',
        registry: employee.registry || '',
        birthDate: employee.birthDate || '',
        department: employee.department || '',
        riskGroup: riskGroupIcon,
        vaccine: employee.vaccine || '',
        dose: employee.dose || ''
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
            accessor: ''
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

const style = {
  iconPositive: {
    color: 'green',
    fontSize: '25px'
  },
  iconNegative: {
    color: 'red',
    fontSize: '25px'
  }
}