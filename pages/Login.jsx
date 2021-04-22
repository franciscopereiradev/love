// import React, { useState, useContext } from 'react';
// import { useHistory } from 'react-router-dom';
// import LoveContext from 'components/Love/Context';

// function initialState() {
//     return{ user: '', password: ''};
// }

// function login({ username, password }) {
//     if (username === 'admin' && password === 'admin'){
//         return {token: '1234'}

//     }
//     return { error: 'Login invalido'}
// }

// export default function userLogin(){
//     const [values, setValues] = useState(initialState)
//     const { setToken } = useContext(LoveContext)
//     const history = useHistory()

//     function onChange(event){
//         const { value, name } = event.target
//         setValues({
//             ...values,
//             [name]: value,
//         })
//     }

//     function onSubmit(event) {
//         event.preventDefault();

//         const { token } = login(values)

//         if (token){
//             setToken(token)
//             return history.push('/')
//         }   

//         setValues(initialState)
//     }

//     return(

//         <div class='pageLanding'>
//             <title>LoveYou ❤ | Login</title>
//             <div class='main'>
//                 <div class='circle1'></div>
//                 <div class='circle2'></div>
//                 <div class='glassLogin'>
//                     <h1 class='title'>Login</h1>
                    
//                     <form class='loginBox' onSubmit={onSubmit}>
//                         <h2>Username</h2>
//                         <input 
//                             class='loginInput' 
//                             name='user' 
//                             id='user' 
//                             value={values.username} 
//                             type='text' 
//                             placeholder='username' 
//                             onChange={onChange}
//                             >
//                         </input>
//                         <h2>Password</h2>
//                         <input 
//                             class='loginInput' 
//                             name='password' 
//                             id='password' 
//                             value={values.password} 
//                             type='password' 
//                             placeholder='password' 
//                             onChange={onChange}>
//                         </input>
//                         <button type='submit' class='entrar'>
//                             <h2>Entrar</h2>
//                         </button>
//                     </form>
                    
//                 </div>

//             </div>
//         </div>
//     )
// }

import React from 'react';
import UserLogin from '../source/components/User/Login/Login';

const PagesLogin = () => (
    <UserLogin/>
);

export default PagesLogin;