import React from 'react';
import PropTypes from 'prop-types';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
const toolbar =(props) => {
    return (
        <header className={styles.Toolbar}>
            <div>MENU</div>
            <Logo height={"80%"}/>
            <nav className={styles.DesktopOnly}> <NavigationItems/> </nav>
        </header>
    );
}

toolbar.propTypes ={
}
toolbar.defaultProps ={
}

export default toolbar;
