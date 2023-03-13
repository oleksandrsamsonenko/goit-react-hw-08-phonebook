import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';

import style from './RegisterPage.module.css';

const RegisterPage = () => {
  const [state, setState] = useState({});
  const dispatch = useDispatch();

  const handleChange = event => {
    setState(prevState => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const onRegister = data => {
    dispatch(register(data));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onRegister(state);
  };

  return (
    <div className={style.parent}>
      <form className={style.form} onSubmit={handleSubmit}>
        <label className={style.element}>
          User name
          <input
            className={style.input}
            type="text"
            name="name"
            onChange={handleChange}
            required
          />
        </label>
        <label className={style.element}>
          User e-mail
          <input
            className={style.input}
            type="email"
            name="email"
            onChange={handleChange}
            required
          />
        </label>
        <label className={style.element}>
          User password
          <input
            className={style.input}
            type="password"
            name="password"
            onChange={handleChange}
            required
          />
        </label>
        <button className={style.button}>Create account</button>
      </form>
    </div>
  );
};

export default RegisterPage;
