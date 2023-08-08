import ContactItem from 'components/ContactItem';
import PropTypes from 'prop-types';
import cl from 'components/ContactList/contactList.module.css';

const renderContactList = (state, updateContacts) => {
  const filteredList = state.contacts.filter(contact => {
    return contact.name.toLowerCase().includes(state.filter.toLowerCase());
  });

  const deleteContact = contactName => {
    const newContacts = state.contacts.filter(
      contact => contact.name !== contactName
    );
    updateContacts(newContacts);
  };

  if (!filteredList.length && state.filter) {
    return (
      <p className={cl.emptyMessage}>
        Sorry, there is no such contact in your phonebook
      </p>
    );
  } else if (!filteredList.length) {
    return (
      <p className={cl.emptyMessage}>
        Complete Emptiness {':('}
        <br /> Try to add some contacts to your phonebook
      </p>
    );
  }

  return (
    <ul className={cl.list}>
      {filteredList.map(contact => {
        return (
          <ContactItem
            deleteContact={deleteContact}
            key={contact.id}
            name={contact.name}
            number={contact.number}
            url={'https://cdn-icons-png.flaticon.com/128/1177/1177568.png'}
          />
        );
      })}
    </ul>
  );
};

const ContactList = ({ state, updateContacts }) => {
  return renderContactList(state, updateContacts);
};

ContactList.propTypes = {
  state: PropTypes.object.isRequired,
};

export default ContactList;
