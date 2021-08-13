import { actionTypes } from './phonebook-types';
import { v4 } from 'uuid';



const addContact = ({ name, number }) => ({
    type: actionTypes.ADD,
    payload: {
        id: v4(),
        name,
        number,
    }
});

const deleteContact = id => ({
    type: actionTypes.DELETE,
    payload: id
});

const filterContacts = value => ({
    type: actionTypes.FILTER,
    payload: value
})

export const PhonebookActions = { addContact, deleteContact, filterContacts }

