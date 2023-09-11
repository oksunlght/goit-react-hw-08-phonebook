import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactItem from 'components/ContactItem/ContactItem';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import Spinner from 'components/Spinner/Spinner';
import contactsSelectors from 'redux/contacts/contacts-selectors';
import contactsOperations from 'redux/contacts/contacts-operations';
import {
  ContactsTitle,
  FormTitle,
  ContactsControllers,
  Highlight,
  ListWrapper,
  Container,
  List,
  FormsWrapper,
} from './ContactList.styled';

const ContactList = ({ children }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <FormTitle>
        Ph<Highlight>o</Highlight>nebook
      </FormTitle>

      <ContactsControllers>
        <FormsWrapper>
          <Form />
          <Filter />
        </FormsWrapper>

        <ListWrapper>
          <ContactsTitle>Contacts</ContactsTitle>

          {contacts.length !== 0 ? (
            <List>
              <ContactItem />
            </List>
          ) : (
            <p>You do not have any contacts</p>
          )}
          {contacts.isLoading && <Spinner />}
        </ListWrapper>
      </ContactsControllers>
    </Container>
  );
};

export default ContactList;
