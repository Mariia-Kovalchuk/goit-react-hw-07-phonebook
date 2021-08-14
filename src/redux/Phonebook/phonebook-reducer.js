import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { PhonebookActions } from './phonebook-actions';

const itemsReducer = createReducer( [], {
    [PhonebookActions.addContact]: (state, {payload})=>[...state, payload],
    [PhonebookActions.deleteContact]:(state, {payload})=> state.filter(({ id }) => id !== payload)
});

const filterReducer = createReducer('', {
    [PhonebookActions.filterContacts]: (_, { payload }) => payload,
})

export default combineReducers({
    items: itemsReducer,
    filter: filterReducer
});