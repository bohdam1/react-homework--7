import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContactsThunk = createAsyncThunk('contact', async ()=>{
    const {data} = await axios.get('https://669e2b0f9a1bda368005a837.mockapi.io/contacts')

    return data;
})

export const addContactsThunk = createAsyncThunk('addContact', async ({  name, phone })=>{
    const {data} = await axios.post('https://669e2b0f9a1bda368005a837.mockapi.io/contacts', { name, phone})
 
    return data;
})

export const deleteContactsThunk = createAsyncThunk('deleteContact', async (id)=>{
    const {data} = await axios.delete(`https://669e2b0f9a1bda368005a837.mockapi.io/contacts/${id}`)
    
    return data;
})