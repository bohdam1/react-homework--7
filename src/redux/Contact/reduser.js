import { createReducer } from "@reduxjs/toolkit";

import {contactsInitState} from "./init-state"
import {contactsListAction} from "./ection"
import {contactsListDeleteAction} from "./ection"


export const contactsListReducer = createReducer(contactsInitState, (builder) => {
  builder
    .addCase(contactsListAction, (state, {payload}) => state.contacts.push(payload))
    .addCase(contactsListDeleteAction, (state, {payload}) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload)
    })
});
