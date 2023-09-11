import { useSelector, useDispatch } from 'react-redux';
import contactsOperations from 'redux/contacts/contacts-operations';
import contactsSelectors from 'redux/contacts/contacts-selectors';
import { BiPhone } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Item, DeleteBtn, ContactInfo, Number } from './ContactItem.styled';

const ContactItem = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(contactsSelectors.getContacts);
  const filter = useSelector(contactsSelectors.getFilter);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return filteredContacts.map(({ id, name, number }) => {
    return (
      <Item key={id}>
        <BiPhone />
        <ContactInfo>
          {name} <Number>{number}</Number>
        </ContactInfo>
        <DeleteBtn
          type="button"
          onClick={() => dispatch(contactsOperations.deleteContact(id))}
        >
          <RiDeleteBin6Line size={30} />
        </DeleteBtn>
      </Item>
    );
  });
};

export default ContactItem;
