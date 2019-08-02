import React from 'react';
import PropTypes from 'prop-types';
import styles from './DrawerToggle.module.css';


const drawerToggle =(props) => (
    <div className = {styles.DrawerToggle} onClick={props.onClick}>
        <div/>
        <div/>
        <div/>
    </div>
);

drawerToggle.propTypes ={
    onClick: PropTypes.func,
}

drawerToggle.defaultProps ={
    onClick: ()=>{}
}

export default drawerToggle;
