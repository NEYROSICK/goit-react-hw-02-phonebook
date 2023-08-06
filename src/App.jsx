import React from 'react';
import contacts from './assets/contacts.json';
import { nanoid } from 'nanoid';

export default class App extends React.Component {
  state = {
    contacts: [...contacts],
    name: '',
    number: '',
    filter: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    const duplicate = this.state.contacts.find(contact => {
      return (
        contact.name.trim().toLowerCase() ===
        this.state.name.trim().toLowerCase()
      );
    });
    duplicate
      ? console.warn(
          `Warning! Contact "${duplicate.name}" is already in your phonebook`
        )
      : this.setState(prevState => ({
          contacts: [
            {
              name: this.state.name.trim(),
              number: this.state.number,
              id: nanoid(),
            },
            ...prevState.contacts,
          ],
        }));
    console.log(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  // renderContactList = () => {
  //   return this.state.filter
  //     ? this.filterContactList()
  //     : this.state.contacts.map(contact => {
  //         return (
  //           <li key={contact.id}>
  //             {contact.name}: {contact.number}
  //           </li>
  //         );
  //       });
  // };

  renderContactList = () => {
    const filteredList = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });
    console.log(filteredList);
    if (!filteredList.length) {
      return <p>Sorry, but there are no such contacts in your phonebook</p>;
    }

    return (
      <ul>
        {filteredList.map(contact => {
          return (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          );
        })}
      </ul>
    );
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            pattern="^[a-zA-Zа-яА-ЯІіЇїҐґ' \-\u0400-\u04FF]+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            value={this.state.name}
          />

          <label htmlFor="number">Number</label>
          <input
            type="tel"
            name="number"
            id="number"
            pattern="^[+]?[0-9\\.\\-\\s]{1,15}$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            value={this.state.number}
          />

          <button>Add contact</button>
        </form>

        <h2>Contacts</h2>

        <label htmlFor="filter">Find contacts by name</label>
        <input
          type="text"
          name="filter"
          id="filter"
          onChange={this.handleChange}
          value={this.state.filter}
        />

        {this.renderContactList()}
      </>
    );
  }
}
