import React from 'react';
import PropTypes from 'prop-types';
import styles from './Backdrop.module.css';

const backdrop =(props) => {
    return props.visible ? <div className={styles.Backdrop} onClick = {props.onClick}></div> : null;
}

backdrop.propTypes ={
    visible: PropTypes.bool,
    onClick: PropTypes.func,
}

backdrop.defaultProps ={
    visible: false,
    onClick: ()=>{}
}

export default backdrop;
