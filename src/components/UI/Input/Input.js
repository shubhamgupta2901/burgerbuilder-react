import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

const input =(props) => {
    let inputElement = null;
    switch(props.inputtype){
        case 'input':
            inputElement = <input className={styles.InputElement} {...props}/>;
            break;
        case 'textarea':
            inputElement = <textarea className={styles.InputElement} {...props}/>;
            break;
        default: 
            inputElement = <input className={styles.InputElement} {...props}/>;
            break;
    }
    return (
        <div className={styles.Input}>
            <label className={styles.Input}>{props.label}</label>
            {inputElement}
        </div>
    );
}

input.propTypes ={
    inputtype: PropTypes.oneOf(['input','textarea']),
    label: PropTypes.string,
}

input.defaultProps ={
    label: "",
    inputtype:'input',

}

export default input;
