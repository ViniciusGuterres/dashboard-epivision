import React, { useEffect, useState, useMemo } from 'react'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faVirus } from '@fortawesome/free-solid-svg-icons';
import { faVirusSlash } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

// Axios 
import { removeData } from '../javascript/crud';
import employeesUrl from '../constants';
import axios from 'axios';
import { getDatas } from '../javascript/crud';

// Components
import Table from '../components/Table';
import Notification from '../components/notification';

export default function EmployeesTable() {

  const [tableDatas, setTabledatas] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  // Geting all employees and set at the tableDatas
  useEffect(() => {
    getDatas(employeesUrl)
      .then(res => setTabledatas(res))
  }, [tableDatas])

  function exitNotificationCard() {
    setTimeout(() => {
      setShowNotification(false);
    }, 2000)
  }

  // Removing employee and sohw notification
  const removeEmployee = id => {
    removeData(employeesUrl, id);

    setShowNotification(true);
    exitNotificationCard();
  }

  // Go to path
  const goPath = id => {
    window.location.href = `../editarFuncionario/${id}`
  };

  // Handle datas to show at the table
  const handleDatas = () => {
    const employeesDatas = tableDatas || [];

    return employeesDatas.map(employee => {
      // employee id
      const employeeId = employee.id || '';

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
        />;

      // Handle sick employee
      const employeeSick = employee.covid || '';
      const employeeSickIcon = employeeSick ?
        <FontAwesomeIcon
          icon={faVirus}
          style={styles.iconPositive}
        /> :
        <FontAwesomeIcon
          icon={faVirusSlash}
          style={styles.iconNegative}
        />;

      // Handle with remove employee icon
      const removeEmployeeIcon =
        <FontAwesomeIcon icon={faTrashAlt} style={styles.iconRemove} onClick={() => removeEmployee(employeeId)} />

      // handle with the edit employee icon
      const editEmployeeIcon =
        <FontAwesomeIcon icon={faEdit} style={styles.iconEdit} onClick={() => goPath(employeeId)} />;

      // Mounting employee obj
      const employeeObj = {
        name: employee.name || '',
        registry: employee.registry || '',
        birthDate: employee.birthDate || '',
        department: employee.department || '',
        riskGroup: riskGroupIcon,
        vaccine: employee.vaccine || '',
        dose: employee.dose || '',
        covid: employeeSickIcon,
        edit: editEmployeeIcon,
        remove: removeEmployeeIcon
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
            Header: 'Covid',
            accessor: 'covid'
          },
          {
            Header: 'Editar',
            accessor: 'edit'
          },
          {
            Header: 'Remover',
            accessor: 'remove'
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

      {showNotification ?
        <Notification
          type={'warning'}
          title={'Removido'}
          subtitle={'Colobarador removido com sucesso'}
        /> :
        null
      }
    </div>
  )
}

const styles = {
  iconPositive: {
    color: 'green',
    fontSize: '20px'
  },
  iconNegative: {
    color: 'red',
    fontSize: '20px'
  },
  iconEdit: {
    color: '#ff9900',
    fontSize: '20px',
    cursor: 'pointer'
  },
  iconRemove: {
    color: '#5e4141',
    fontSize: '20px',
    cursor: 'pointer'
  }
}