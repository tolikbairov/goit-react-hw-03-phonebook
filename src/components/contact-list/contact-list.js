import React from "react";
import styles from "./contact-list.module.css";
const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className="ContactList">
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={styles.ContactList__item}>
        <p className={styles.ContactList__text}>
          <span className={styles.text__name}>{name}:</span>
          {number}
        </p>
        <button
          type="button"
          className="ContactList__btn"
          onClick={() => onDeleteContact(id)}
        >
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
