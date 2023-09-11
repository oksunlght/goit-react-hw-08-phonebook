import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/contactsSlice';
import contactsSelectors from 'redux/contacts/contacts-selectors';
import { InputLabel, Input, FilterForm } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(contactsSelectors.getFilter);

  const onFilterChange = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  return (
    <FilterForm>
      <InputLabel>
        Find contacts by name
        <Input type="text" value={filter} onChange={onFilterChange} />
      </InputLabel>
    </FilterForm>
  );
};

export default Filter;
