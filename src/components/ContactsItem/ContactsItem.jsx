import PropTypes from 'prop-types';
import css from './ContactsItem.module.css';
import { getStatus } from 'redux/contacts/contacts-selectors';
import { useSelector } from 'react-redux';

export const ContactsItem = ({ id, name, number, onDelete }) => {
  const status = useSelector(getStatus);
  return (
    <li className={css.item}>
      <span>{name}</span>
      <span>{number}</span>
      <button
        disabled={status ? true : false}
        className={css.btn}
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
