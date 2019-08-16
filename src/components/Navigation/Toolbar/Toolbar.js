import React from 'react';
import PropTypes from 'prop-types';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
const toolbar =(props) => {
    return (
        <header className={styles.Toolbar}>
            <DrawerToggle onClick={props.onSideDrawerToggle}></DrawerToggle>
            <div className={styles.Logo}>
                <Logo/>
            </div>
            <nav className={styles.DesktopOnly}> <NavigationItems/> </nav>
        </header>
    );
}

toolbar.propTypes ={
    onSideDrawerToggle: PropTypes.func,
}
toolbar.defaultProps ={
    onSideDrawerToggle: ()=>{},
}

export default toolbar;
