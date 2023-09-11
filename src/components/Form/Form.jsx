import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { IoIosAddCircleOutline } from 'react-icons/io';
import contactsSelectors from 'redux/contacts/contacts-selectors';
import contactsOperations from 'redux/contacts/contacts-operations';
import { ContactForm, InputLabel, Input, SubmitBtn } from './Form.styled';

const Form = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(contactsSelectors.getContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const newContact = {
      name,
      number,
    };

    const contactName = contacts.map(contact => contact.name);

    if (contactName.includes(name)) {
      toast.error(`${name} is already in contacts`);
      form.reset();
      return;
    }

    dispatch(contactsOperations.addContact(newContact));
    toast.success(`${name} successfully added to the contacts list`);
    form.reset();
  };

  return (
    <ContactForm onSubmit={handleSubmit}>
      <InputLabel>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          autoComplete="off"
          required
        />
      </InputLabel>
      <InputLabel>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          autoComplete="off"
          required
        />
      </InputLabel>

      <SubmitBtn type="submit">
        <IoIosAddCircleOutline size={45} />
      </SubmitBtn>
    </ContactForm>
  );
};

export default Form;
