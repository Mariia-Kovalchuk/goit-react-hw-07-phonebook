import PropTypes from "prop-types";
import style from './Filter.module.css';
import { connect } from 'react-redux';
import { PhonebookActions } from '../../redux/Phonebook/phonebook-actions'



const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input type="text" value={value} onChange={onChange} className={style.input} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  value: state.contacts.filter
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(PhonebookActions.filterContacts(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
