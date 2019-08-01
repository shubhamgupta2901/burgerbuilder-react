import React from 'react';
import PropTypes from 'prop-types';
import styles from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';


const sideDrawer =(props) => {
    return (
        <React.Fragment>
            <Backdrop visible/>
            <div className={styles.SideDrawer}>
                <Logo height={"11%"}/>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </React.Fragment>
    );
}

sideDrawer.propTypes ={
}

sideDrawer.defaultProps ={
}

export default sideDrawer;
