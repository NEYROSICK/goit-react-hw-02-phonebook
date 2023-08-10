import React from 'react';
import contacts from './assets/contacts.json';
import ContactForm from './components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Section from 'components/Section';

export default class App extends React.Component {
  state = {
    contacts: [...contacts],
    filter: '',
  };

  updateContacts = newContacts => {
    this.setState({ contacts: newContacts });
  };

  filterContacts = () => {
    const filteredList = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });

    return filteredList;
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    return (
      <>
        <Section title="Phonebook" variant="phonebook">
          <ContactForm
            state={this.state}
            updateContacts={this.updateContacts}
          />
        </Section>

        <Section title="Contacts" variant="contacts">
          <Filter
            state={this.state}
            handleFilterChange={this.handleFilterChange}
          />
          <ContactList
            state={this.state}
            updateContacts={this.updateContacts}
            filteredContacts={this.filterContacts()}
          />
        </Section>
      </>
    );
  }
}
