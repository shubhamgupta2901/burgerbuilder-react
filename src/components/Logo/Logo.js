import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import styles from './Logo.module.css';
import burgerLogo from '../../assets/images/burger-logo.png'

const logo =(props) => (
    <Link
        to="/"
    >
        <div
            className={styles.Logo} 
            style={{height: props.height}}
        >
            <img src={burgerLogo} alt="burger-logo"/>
        </div>
    </Link>
     
)

logo.propTypes ={
    height: PropTypes.string,
}

logo.defaultProps ={
    height: "80%",
}

export default logo;
