/**
 *
 * Login
 *
 */

import React, { useState } from 'react';

function Login(props) {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorUserName, setErrorUserName] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const handleLogin = (userName, password) => {

    setErrorUserName((userName === '') ? 'Nhập user name đi bạn ơi' : '');
    setErrorPassword((password === '') ? 'Nhập password đi bạn ơi' : '');

    if (errorPassword === '' && errorUserName === '') {
      props.login(userName, password);
    }
  }

  return (
    <div>
      <center>
        <form className="form-group">
          <p className='error mt-2' style={{ color:'red' }}>{ errorUserName }</p>
          <p className='error mt-2' style={{ color:'red' }}>{ errorPassword }</p>
          <label className="col-form-label float-left">User</label>
          <input
            key="userName"
            className="form-control"
            onChange={event => {
              setUserName(event.target.value);
            }}
            placeholder="user"
          />

          <label className="col-form-label float-left mt-3">Password</label>
          <input
            key="password"
            className="form-control"
            onChange={event => {
              setPassword(event.target.value);
            }}
            type="password"
          />

          <button
            type="button"
            onClick={() => handleLogin(userName, password)}
            className="btn btn-primary mt-5 float-left"
          >
            Submit
          </button>
        </form>
      </center>
    </div>
  );
}

Login.propTypes = {};

export default Login;
