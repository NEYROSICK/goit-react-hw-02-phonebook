import ContactItem from 'components/ContactItem';
import PropTypes from 'prop-types';
import cl from 'components/ContactList/contactList.module.css';

const renderContactList = (state, updateContacts, filteredContacts) => {
  const deleteContact = contactName => {
    const newContacts = state.contacts.filter(
      contact => contact.name !== contactName
    );
    updateContacts(newContacts);
  };

  // const filteredList = state.contacts.filter(contact => {
  //   return contact.name.toLowerCase().includes(state.filter.toLowerCase());
  // });

  // if (!filteredList.length && state.filter) {
  //   return (
  //     <p className={cl.emptyMessage}>
  //       Sorry, there is no such contact in your phonebook
  //     </p>
  //   );
  // } else if (!filteredList.length) {
  //   return (
  //     <p className={cl.emptyMessage}>
  //       Complete Emptiness {':('}
  //       <br /> Try to add some contacts to your phonebook
  //     </p>
  //   );
  // }

  if (!state.contacts.length) {
    return (
      <p className={cl.emptyMessage}>
        Complete Emptiness {':('}
        <br /> Try to add some contacts to your phonebook
      </p>
    );
  } else if (!filteredContacts.length && state.filter) {
    return (
      <p className={cl.emptyMessage}>
        Sorry, there is no such contact in your phonebook
      </p>
    );
  } else {
    return (
      <ul className={cl.list}>
        {filteredContacts.map(contact => {
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
  }
};

const ContactList = ({ state, updateContacts, filteredContacts }) => {
  return renderContactList(state, updateContacts, filteredContacts);
};

ContactList.propTypes = {
  state: PropTypes.object.isRequired,
};

export default ContactList;
