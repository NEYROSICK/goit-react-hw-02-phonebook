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

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
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
          <Filter state={this.state} handleChange={this.handleChange} />
          <ContactList
            state={this.state}
            updateContacts={this.updateContacts}
          />
        </Section>
      </>
    );
  }
}
