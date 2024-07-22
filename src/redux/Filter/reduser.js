import { createReducer } from "@reduxjs/toolkit";
import { filterInitState } from "./init-state";
import { filterAction } from "./ection";


export const filterReducer = createReducer(filterInitState, (builder)=>{
    builder.addCase(filterAction, (state, {payload}) => {state.filter = payload})
});
