import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import LoveContext from '../../Love/Context'

const RoutesPrivate = ({ component: Component, ...rest}) => {
    const {} = useContext(LoveContext)

    return(
        <Route 
            {...rest}
            render={() => token 
                ? <Component {...rest} />
                : <Redirect to='/login' />
            }
        />
    )
}

export default RoutesPrivate;