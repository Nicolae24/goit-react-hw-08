import { createSelector } from "@reduxjs/toolkit";

export const selectNameFilter = (state) => state.filter.text;
export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectIsError = (state) => state.contacts.isError;

export const selectFilteredContacts = createSelector(
    [selectNameFilter, selectContacts],
    (filter, contacts) => {
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    }
);