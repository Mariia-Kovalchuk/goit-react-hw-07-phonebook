import PropTypes from "prop-types";

import styles from './Phonebook.module.css';

const Container = ({ children }) => <div className={styles.container}>{children}</div>;

Container.propTypes = {
  children: PropTypes.node,
}

export default Container;