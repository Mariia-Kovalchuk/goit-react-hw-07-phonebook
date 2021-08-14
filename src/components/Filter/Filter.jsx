import style from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { GetFilter } from "../../redux/Phonebook/phonebook-selectors.js";
import { PhonebookActions } from '../../redux/Phonebook/phonebook-actions'



const Filter = () => {
  const value = useSelector(GetFilter)
  const dispatch = useDispatch();
  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={(e)=>dispatch(PhonebookActions.filterContacts(e.target.value))} className={style.input} />
    </label>
  )
};

export default Filter;
