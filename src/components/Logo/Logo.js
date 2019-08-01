import React from 'react';
import PropTypes from 'prop-types';
import styles from './Logo.module.css';
import burgerLogo from '../../assets/images/burger-logo.png'

const logo =(props) => (
    <div className={styles.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="burger-logo"></img>
    </div>
)

logo.propTypes ={
    height: PropTypes.string,
}

logo.defaultProps ={
    height: "80%",
}

export default logo;
