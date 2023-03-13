import { Link } from 'react-router-dom';
import style from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>
        Oh no! Page what you looking for is removed or was never created
      </h2>
      <Link to="/">
        <b>anyway, use this link to return at starting page</b>
      </Link>
    </div>
  );
};

export default NotFoundPage;
