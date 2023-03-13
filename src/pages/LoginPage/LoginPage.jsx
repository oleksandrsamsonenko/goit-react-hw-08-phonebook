import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';

import style from './LoginPage.module.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showLoginAlert = () => {
  toast.error('Please enter correct e-mail and password ', {
    position: 'top-center',
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};

const LoginPage = () => {
  const [state, setState] = useState({});
  const dispatch = useDispatch();

  const handleChange = event => {
    setState(prevState => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const onLogin = data => {
    dispatch(login(data));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onLogin(state);
  };

  return (
    <div className={style.parent}>
      <p className={style.title}>Login using your e-mail and password </p>
      <form className={style.form} onSubmit={handleSubmit}>
        <label className={style.element}>
          E-mail{' '}
          <input
            className={style.input}
            type="email"
            name="email"
            onChange={handleChange}
            required
          />
        </label>
        <label className={style.element}>
          Password{' '}
          <input
            className={style.input}
            type="password"
            name="password"
            onChange={handleChange}
            required
          />
        </label>

        <button className={style.button}>Log in</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
