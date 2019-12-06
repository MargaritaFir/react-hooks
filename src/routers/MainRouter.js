import React from 'react';
import {Route, Switch} from "react-router-dom";
import MainTodo from '../MainTodo'
import MyContext from '../uninames/Context';
import HookRefs from '../uninames/HookRefs';
import HookUsers from '../uninames/UserHook'

const MainRouter =() => (
    <div>
        <Switch>
            <Route exact path='/' component={MainTodo} />
            <Route path='/cont' component={MyContext} />
            <Route path='/refs' component={HookRefs} />
            <Route path='/counter' component={HookUsers} />
        </Switch>
    </div>
)

export default MainRouter;