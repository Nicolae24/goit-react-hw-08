import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import { instance } from "../auth/operations";

// const instance = axios.create({
//     baseURL: "https://6851a3258612b47a2c0ad13a.mockapi.io",
// });

export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async (_, thunkAPI) => {
        try {
            const { data } = await instance.get("/contacts");
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
    {
        // condition(_, { getState }) {
        //     const isEmptyList = getState().contacts.items.length === 0;
        //     return isEmptyList;
        // },
    }
);

export const addContacts = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkAPI) => {
        try {
            const { data } = await instance.post("/contacts", contact);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContacts = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => {
        try {
            const { data } = await instance.delete(`/contacts/${id}`);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);