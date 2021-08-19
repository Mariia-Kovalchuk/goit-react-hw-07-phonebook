import style from './ContactList.module.css'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { phonebookSelectors, phonebookOperations } from '../../redux/Phonebook';



const ContactList = () => {
    const contacts = useSelector(phonebookSelectors.GetFilteredContactList);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(phonebookOperations.fetchContacts())
        }, [dispatch]);


    return (
        <ul className={style.contactsList}>
            {contacts.map(({ id, name, number }) => (
                <li key={id} className={style.contactItem}>
                    <span className={style.listItem}>
                        <p className={style.listItemName}>{name}</p>
                        <p className={style.listItemNumber}>{number}</p>
                    </span>
                    <button
                        type="button"
                        onClick={() => dispatch(phonebookOperations.deleteContact(id))}
                        className={style.button}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    )
};


export default ContactList;