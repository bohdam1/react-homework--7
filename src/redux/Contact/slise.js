import { createSlice } from "@reduxjs/toolkit";
import {fetchContactsThunk,addContactsThunk,deleteContactsThunk} from "./thunk"


export const contactsInitState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitState,
  // reducers: {
  //   addContact: (state, action) => {
  //     state.contacts.push(action.payload);
  //   },
  //   deleteContact: (state, action) => {
  //     state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
  //   }
  // },
  extraReducers: (builder) => {
    builder.addCase(fetchContactsThunk.pending, (state) => {
        (state.isLoading) = true})
   
    .addCase(fetchContactsThunk.fulfilled, (state, {payload}) => {
        (state.items) = payload; 
        (state.isLoading) = false})
    
    .addCase(fetchContactsThunk.rejected, (state, {error}) => {
        (state.error) = error.message;
        (state.isLoading) = false})
    
    .addCase(addContactsThunk.pending, (state) => {
        (state.isLoading) = true})
    
    .addCase(addContactsThunk.fulfilled, (state, {payload}) => {(state.items).push(payload); 
        (state.isLoading) = false})
    
    .addCase(addContactsThunk.rejected, (state, {error}) => {
        (state.error) = error.message; 
        (state.isLoading) = false})
    
    .addCase(deleteContactsThunk.pending,  (state) => {
        (state.isLoading) = true})
    
    .addCase(deleteContactsThunk.fulfilled, (state, {payload})=> {(state.items) = (state.items.filter((contact) => contact.id !== payload.id)); 
        (state.isLoading) = false})
  
    .addCase(deleteContactsThunk.rejected, (state, {error}) => {
        (state.error) = error.message; 
        (state.isLoading) = false})
   
    }
    
});





export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;


