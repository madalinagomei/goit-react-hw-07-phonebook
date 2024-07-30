import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
import styles from './ContactList.module.css';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(state => {
    return state.contacts.items.filter(item =>
      item.name.toLowerCase().trim().includes(state.filter.toLowerCase().trim())
    );
  });
  return (
    <ul className={styles.wrapperList}>
      {contacts.map(contact => (
        <ContactListItem
          key={nanoid()}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
};

export default ContactList;
