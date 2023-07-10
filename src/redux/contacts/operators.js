import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk('contact/get', async (_, thunkAPI) => {
  try {
    const response = await axios.get(
      '/docs/#/Contact/get_contacts'
    );
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const postContacts = createAsyncThunk('contact/post', async (data, thunkAPI) => {
  const newContact = {
    name: data.name,
    number: data.number,
    createdAt: Date.now(),
  };
  try {
    const response = await axios.post(
      '/docs/#/Contact/post_contacts',
      newContact
    );
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const deleteContacts = createAsyncThunk('contact/delete', async (contactId, thunkAPI) => {
  try {
    const response = await axios.delete(
      `/docs/#/Contact/delete_contacts__${contactId}_`
    );
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
