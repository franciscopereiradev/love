// import UIButton from 'components/UI/Button/Button';
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import LoveContext from '../../Love/Context';

function initialState() {
    return{ user: '', password: ''};
}

function login({ username, password }) {
    if (username === 'admin' && password === 'admin'){
        return {token: '1234'}

    }
    return { error: 'Login invalido'}
}


const UserLogin = () => {

    const [values, setValues] = useState(initialState)
    const { setToken } = useContext(LoveContext)
    const history = useHistory()

    function onChange(event){
        const { value, name } = event.target

        setValues({
            ...values,
            [name]: value,
        })
    }

    function onSubmit(event) {
        event.preventDefault();

        const { token } = login(values)

        if (token){
            setToken(token)
            return history.push('/')
        }   

        setValues(initialState)
    }

  return (
    <div className="user-login">
      <h1 className="user-login__title">Acessar o Sistema</h1>
      <form autoComplete="nope">
        <div className="user-login__form-control">
          <label htmlFor="email">E-mail</label>
          <input id="email" type="text" name="email" autoComplete="off" />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" name="password" />
        </div>
        <button
          type="submit"
          className="user-login__submit-button"
          rounded
          class='entrar'
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default UserLogin;