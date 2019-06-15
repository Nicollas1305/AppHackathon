import react from 'react';
import { Switch, Route } from 'react-router-dom'

import Main from './pages/Main';
import cadastro from './pages/Cadastro';
import notas from './pages/notas';
import opçoes from './pages/opçoes';
import { deflate } from 'zlib';

function Routes() {
    return(
     <switch>
        <Route path="/" component={Cadastro}/>
        <Route path="/new" component={Nem}/>
    </switch>
    );
}



export default Routes;