import { createSlice } from "@reduxjs/toolkit";
import contacts from "../data/contacts.json";

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    items: contacts
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter((el) => el.id !== action.payload.id);
    }
  }
});

export const { addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
