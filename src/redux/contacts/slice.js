import { createSlice } from '@reduxjs/toolkit';
import { deleteContacts, fetchContacts, postContacts } from './operators';
import { logOut } from '../users/operators';



const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};



const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const rootReducer = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  // extraReducers: builder => {
  //   //* Get Contacts
  //   builder
  //     .addCase(fetchContacts.pending, state => {
  //       state.contacts.isLoading = true;
  //     })
  //     .addCase(fetchContacts.fulfilled, (state, action) => {
  //       state.contacts.isLoading = false;
  //       state.contacts.items = action.payload;
  //     })
  //     .addCase(fetchContacts.rejected, (state, action) => {
  //       state.contacts.error = action.payload;
  //       state.contacts.isLoading = false;
  //     })
  //     // * Add Contact
  //     .addCase(postContacts.pending, state => {
  //       state.contacts.isLoading = true;
  //     })
  //     .addCase(postContacts.fulfilled, state => {
  //       state.contacts.isLoading = false;
  //     })
  //     .addCase(postContacts.rejected, (state, action) => {
  //       state.contacts.error = action.payload;
  //       state.contacts.isLoading = false;
  //     })
  //     //* Delete Contact
  //     .addCase(deleteContacts.pending, state => {
  //       state.contacts.isLoading = true;
  //     })
  //     .addCase(deleteContacts.fulfilled, state => {
  //       state.contacts.isLoading = false;
  //     })
  //     .addCase(deleteContacts.rejected, (state, action) => {
  //       state.contacts.error = action.payload;
  //       state.contacts.isLoading = false;
  //     });
  // },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [postContacts.pending]: handlePending,
    [deleteContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [postContacts.rejected]: handleRejected,
    [deleteContacts.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [postContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },
    [deleteContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.splice(index, 1);
    },
    [logOut.fulfilled](state) {
      state.contacts = [];
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const { changeFilter } = rootReducer.actions;
export default rootReducer.reducer;
