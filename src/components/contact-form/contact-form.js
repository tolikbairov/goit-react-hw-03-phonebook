import React, { Component } from "react";
import styles from "./contact-form.module.css";
class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label className={styles.label}>
            <span className={styles.label__text}>Name</span>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.name}
              name="name"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            />
          </label>
          <label className={styles.label}>
            <span className={styles.label__text}>Number</span>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.number}
              name="number"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

export default ContactForm;
