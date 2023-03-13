import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isUserLogin, getUser } from 'redux/auth/auth-selectors';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import style from './AuthBar.module.css';

const AuthBar = () => {
  const isLogin = useSelector(isUserLogin);
  const userName = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={style.container}>
      <p className={style.logo}>Phonebook</p>
      <div className={style.auth}>
        {isLogin && (
          <>
            <p className={style.welcome}>
              Welcome <b>{userName}</b>
            </p>
            <button className={style.button} type="button" onClick={onLogout}>
              Log out
            </button>
          </>
        )}
        {!isLogin && (
          <>
            <NavLink className={style.button} to="/login">
              Login
            </NavLink>
            <NavLink className={style.button} to="/register">
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthBar;
