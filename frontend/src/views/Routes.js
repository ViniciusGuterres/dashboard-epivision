import {
    Switch,
    Route,
} from 'react-router-dom';

import Footer from '../templates/Footer';

import EmployeeRegistration from './EmployeeRegistration';

// Views


export default function Routes() {
    return (
        <Switch>
            {/* <Route path='/' component={} exact/> */}
            <Route path={'/cadastroFuncionario'} component={EmployeeRegistration}/>
            <Route path='/' component={Footer} exact/>
        </Switch>
    )
}