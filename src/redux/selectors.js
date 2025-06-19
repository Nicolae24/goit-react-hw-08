import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "./contactsSlice";

export const selectNameFilter = (state) => state.filter.text;


export const selectFilteredContacts = createSelector(
    [selectNameFilter, selectContacts],
    (filter, contacts) => {
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    }
);