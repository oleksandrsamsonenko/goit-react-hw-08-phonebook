import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getAllContacts,
  addNewContact,
  removeContact,
} from 'api/connectionsAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await getAllContacts();
      return data;
    } catch ({ response }) {
      console.log(response);
      return thunkAPI.rejectWithValue(response);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await removeContact(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await addNewContact(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
