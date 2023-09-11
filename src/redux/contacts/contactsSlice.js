import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contacts-operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',

  initialState,

  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(contactsOperations.fetchContacts.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(contactsOperations.fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(contactsOperations.fetchContacts.rejected, handleRejected)
      .addCase(contactsOperations.addContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items.push(action.payload);
      })
      .addCase(contactsOperations.addContact.rejected, handleRejected)
      .addCase(contactsOperations.deleteContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        const index = state.contacts.items.findIndex(
          ({ id }) => id === action.payload.id
        );
        state.contacts.items.splice(index, 1);
      })
      .addCase(contactsOperations.deleteContact.rejected, handleRejected);
  },
});

export const { add, remove, filterContacts } = contactsSlice.actions;
