import React from 'react';
import PropTypes from 'prop-types';
import styles from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer =(props) => {

    let attachedStyles = [styles.SideDrawer, styles.Close];
    if(props.visible){
        attachedStyles =[styles.SideDrawer, styles.Open];
    }
    return (
        <React.Fragment>
            <Backdrop visible = {props.visible} onClick={props.closed}/>
            <div className={attachedStyles.join(" ")}>
                <Logo height={"11%"}/>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </React.Fragment>
    );
}

sideDrawer.propTypes ={
    visible: PropTypes.bool,
    closed: PropTypes.func,
}

sideDrawer.defaultProps ={
    visible: false,
    closed: () => {}
}

export default sideDrawer;
