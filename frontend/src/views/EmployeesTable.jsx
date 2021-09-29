import React, { useState } from 'react'

import { getDatas } from '../javascript/genericFuctions';

import employeesUrl from '../constants';

import { useTable } from 'react-table'

export default function EmployeesTable() {

  const [tableDatas, setTabledatas] = useState();

  // function handleDatas() {
  //   return tableDatas.map(employee => {

  //     const employeeObj = {
  //       name: employee.name || '',
  //       registry: employee.registry || '',
  //       birthDate: employee.birthData || '',
  //       department: employee.department || '',
  //       riskGroup: employee.riskGroup || '',
  //       vaccine: employee.vaccine || '',
  //       dose: employee.dose || ''
  //     }

  //     return employeeObj

  //   })
  // }

  console.log(getDatas('http://localhost:3001/users'));

  const data = React.useMemo(
    () => [
      
    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'Nome',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: 'Matrícula',
        accessor: 'registry',
      },
      {
        Header: 'Nascimento',
        accessor: 'birthDate',
      },
      {
        Header: 'Setor',
        accessor: 'department',
      },
      {
        Header: 'Grupo de risco',
        accessor: 'riskGroup',
      },
      {
        Header: 'Vacina',
        accessor: 'vaccine',
      },
      {
        Header: 'Dose',
        accessor: 'dose',
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <table {...getTableProps()} style={{ border: '1px solid grey', borderSpacing: '0' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{
                  background: '#4e73df',
                  color: '#fff',
                  fontWeight: 'bold',
                  padding: '10px',
                  border: '1px solid black'
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '10px',
                      border: '1px solid #00000070',
                      background: '#fff',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}