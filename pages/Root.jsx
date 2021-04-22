import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import LoveProvider from '../source/components/Love/Provider'
import RoutesPrivate from '../source/components/Routes/Private/Private'
import Home from './Home'
import Login from './Login'

const PagesRoot = () => (
    <Router>
        <LoveProvider>
            <Switch>
                <Route path='/login' component={Login} />
                <RoutesPrivate path='/' component={Home}/>
            </Switch> 
        </LoveProvider>
    </Router>
)

export default PagesRoot