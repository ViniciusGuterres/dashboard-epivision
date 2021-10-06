import {
    Switch,
    Route,
} from 'react-router-dom';
import EditEmployees from './EditEmployees.jsx';

import EmployeeRegistration from './EmployeeRegistration.jsx';
import EmployeesTable from './EmployeesTable.jsx';

// Views

export default function Routes() {
    return (
        <Switch>
            {/* <Route path='/' component={} exact/> */}
            <Route path='/cadastroFuncionario' component={EmployeeRegistration}/>
            <Route path='/listaDeFuncionarios' component={EmployeesTable} />
            <Route path='/editarFuncionario' component={EditEmployees} />
        </Switch>
    )
}