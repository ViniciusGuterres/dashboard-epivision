import {
    Switch,
    Route,
} from 'react-router-dom';

import EmployeeRegistration from './EmployeeRegistration.jsx';

// Views


export default function Routes() {
    return (
        <Switch>
            {/* <Route path='/' component={} exact/> */}
            <Route path={'/cadastroFuncionario'} component={EmployeeRegistration}/>
            {/* <Route path='/' component={''} exact/> */}
        </Switch>
    )
}