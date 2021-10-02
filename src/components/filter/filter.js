import React from "react";
import styles from "./filter.module.css";
const Filter = ({ value, onChange }) => (
  <label className={styles.filter__label}>
    <span className={styles.filter__text}>Find contacts by name</span>
    <input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;
