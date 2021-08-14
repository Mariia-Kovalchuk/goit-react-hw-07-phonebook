import style from './ContactList.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { GetFilteredContactList } from "../../redux/Phonebook/phonebook-selectors.js";
import { PhonebookActions } from '../../redux/Phonebook/phonebook-actions'


const ContactList = () => {
    const contacts = useSelector(GetFilteredContactList);
    const dispatch = useDispatch()

    return (
        <ul className={style.contactsList}>
            {contacts.map(({ id, name, number }) => (
                <li key={id} className={style.contactItem}>
                    <span className={style.listItem}>
                        <p className={style.listItemText}>{name}</p>
                        <p className={style.listItemText}>{number}</p>
                    </span>
                    <button
                        type="button"
                        onClick={() => dispatch(PhonebookActions.deleteContact(id))}
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