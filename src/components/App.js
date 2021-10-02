import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Filter from "./filter/filter";
import "./App.css";
import ContactForm from "./contact-form/contact-form";
import ContactList from "./contact-list/contact-list";
class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };
  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
  addContact = (contact) => {
    // const newContact = {
    // name: this.state.name,
    // number: this.state.number,
    // id: uuidv4(),
    // };
    // this.state.contacts.push(newContact);
    const normalizedName = contact.name.toLowerCase();
    const found = this.state.contacts.some((el) =>
      el.name.toLowerCase().includes(normalizedName)
    );
    if (found) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    const newContact = {
      id: uuidv4(),
      name: contact.name,
      number: contact.number,
    };
    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />

          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </>
    );
  }
}
export default App;
