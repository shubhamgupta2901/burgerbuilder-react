import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import styles from './NavigationItem.module.css';

const navigationItem =(props) => (
    <li className={styles.NavigationItem}>
        <NavLink 
            to={props.link} 
            activeClassName={styles.active}
        >
            {props.children}
        </NavLink>
    </li>
);

navigationItem.propTypes ={
    link:PropTypes.string,
    active: PropTypes.bool
}

navigationItem.defaultProps ={
    link:"/",
    active:false,
}

export default navigationItem;
