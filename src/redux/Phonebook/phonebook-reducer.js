import { combineReducers } from 'redux';
import { actionTypes } from './phonebook-types'

const itemsReducer = (state = JSON.parse(localStorage.getItem('contacts')) ?? [], { type, payload }) => {
    switch (type) {
        case actionTypes.ADD:
            return [...state, payload];

        case actionTypes.DELETE:
            return state.filter(contact => contact.id !== payload)

        default:
            return state;
    }


};

const filterReducer = (state = '', { type, payload }) => {
    switch (type) {
        case actionTypes.FILTER:
            return payload;

        default:
            return state;
    }
};


export default combineReducers({
    items: itemsReducer,
    filter: filterReducer
});