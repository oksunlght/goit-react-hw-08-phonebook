const getContacts = state => state.contacts.contacts.items;
const getFilter = state => state.contacts.filter;

const contactsSelectors = {
  getContacts,
  getFilter,
};

export default contactsSelectors;
