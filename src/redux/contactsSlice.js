
import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContacts, deleteContacts } from "./contactsOps"


const slice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        isError: null,
    },

    extraReducers: (builder) =>
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.payload;
            })
            .addCase(addContacts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = null;
                state.items.push(action.payload);
            })
            .addCase(addContacts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.payload;
            })
            .addCase(deleteContacts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = null;
                state.items = state.items.filter(
                    (contact) => contact.id !== action.payload.id
                );
            })
            .addCase(deleteContacts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.payload;
            })


});

export const contactReducer = slice.reducer;


export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectIsError = (state) => state.contacts.isError;