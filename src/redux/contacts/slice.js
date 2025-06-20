// import { createSlice } from "@reduxjs/toolkit";

// const slice = createSlice({
//     name: "filter",
//     initialState: { text: "" },
//     reducers: {
//         changeFilter: (state, action) => {
//             state.text = action.payload;
//         },
//     },
// });

// export const filterReducer = slice.reducer;
// export const { changeFilter } = slice.actions;


// export const selectNameFilter = (state) => state.filter.text;


import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContacts, deleteContacts } from "./operations"
import { logOut } from "../auth/operations";


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
            .addCase(logOut.fulfilled, (state) => {
                state.items = [];
            }),

});

export const contactReducer = slice.reducer;


