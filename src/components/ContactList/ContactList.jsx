import style from './ContactList.module.css'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { phonebookSelectors, phonebookOperations } from '../../redux/Phonebook';



const ContactList = () => {
    const contacts = useSelector(phonebookSelectors.GetFilteredContactList);
    const dispatch = useDispatch();
    const error = useSelector(phonebookSelectors.getError);
    const isLoading = useSelector(phonebookSelectors.getLoading);

    useEffect(() => {
        dispatch(phonebookOperations.fetchContacts())
    }, [dispatch]);

    
    return (
        <>
            {isLoading && <p>{" Loading... "}</p>}
            {error && <p>{`Sorry, something went wrong: ${error}. Please Try Again Later. `}</p>}
            {!isLoading && !error && contacts.length &&<ul className={style.contactsList}>
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
                </ul>}
            {!isLoading && !error && contacts.length === 0 && <p>No match found. Please check your query!</p>}
        </>
    );
};


export default ContactList;