import React from 'react';
import styles from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li key={id} className={styles.wrapperItem}>
      {name}: {number}
      <button
        className={styles.deleteButton}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
