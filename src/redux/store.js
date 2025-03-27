import { configureStore, createAction } from "@reduxjs/toolkit";

import contacts from "../data/contacts.json";

const initialStore = {
  contacts: {
    items: JSON.parse(localStorage.getItem("contacts")) || contacts
  },
  filters: {
    name: ""
  }
};

//Redusers
const contactsReducer = (state = initialStore.contacts, action) => {
  switch (action.type) {
    case "contacts/addContact": {
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    }
    case "contacts/deleteContact": {
      console.log(" state:", state);
      return {
        ...state,
        items: state.items.filter((el) => el.id !== action.payload.id)
      };
    }
    default:
      return state;
  }
};

const filtersReducer = (state = initialStore.filters, action) => {
  switch (action.type) {
    case "filters/addFilterName": {
      return {
        ...state,
        name: action.payload
      };
    }
    default:
      return state;
  }
};

// Store
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer
  }
});

// Actions
export const addContactAction = createAction("contacts/addContact");
export const deleteContactAction = createAction("contacts/deleteContact");
export const filterNameAction = createAction("filters/addFilterName");
