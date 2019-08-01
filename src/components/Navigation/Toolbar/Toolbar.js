import React from 'react';
import PropTypes from 'prop-types';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
const toolbar =(props) => {
    return (
        <header className={styles.Toolbar}>
            <div>MENU</div>
            <Logo/>
            <nav className={styles.nav}> <NavigationItems/> </nav>
        </header>
    );
}

toolbar.propTypes ={
}
toolbar.defaultProps ={
}

export default toolbar;
