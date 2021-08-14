import { createAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';


const addContact = createAction('phonebook/add', ({ name, number }) => ({
    payload: {
        id: v4(),
        name,
        number,
    }
}));

const deleteContact = createAction('phonebook/delete')
const filterContacts = createAction('phonebook/filter')

export const PhonebookActions = { addContact, deleteContact, filterContacts }

