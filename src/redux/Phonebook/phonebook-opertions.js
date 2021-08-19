import axios from 'axios';
import { PhonebookActions } from './phonebook-actions'

axios.defaults.baseURL = 'http://localhost:3000';

const fetchContacts = () => async dispatch => {
    dispatch(PhonebookActions.fetchContactRequest())
    try {
        const { data } = await axios.get("/contacts");
        dispatch(PhonebookActions.fetchContactSuccess(data))
    } catch (error) {
        dispatch(PhonebookActions.fetchContactError(error))
    }
};

const addContact = ({ name, number }) => async dispatch => {
    const contact = {
        name,
        number
    }
    dispatch(PhonebookActions.addContactRequest())
    try {
        const { data } = await axios.post('/contacts', contact)
        dispatch(PhonebookActions.addContactSuccess(data))
    } catch (error) {
        dispatch(PhonebookActions.addContactError(error))
    }
};

const deleteContact = (id) => async dispatch => {
    dispatch(PhonebookActions.deleteContactRequest())
    try {
        await axios.delete(`/contacts/${id}`);
        dispatch(PhonebookActions.deleteContactSuccess(id))
    } catch (error) {
        dispatch(PhonebookActions.deleteContactError(error));
    }
}

export const phonebookOperations= { fetchContacts, addContact, deleteContact }