import PropTypes from "prop-types";

import styles from './Phonebook.module.css';

const Phonebook = ({ children }) => <div className={styles.container}>{children}</div>;

Phonebook.propTypes = {
  children: PropTypes.node,
}

export default Phonebook;