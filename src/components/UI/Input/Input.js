import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

const input =(props) => {
    let inputElement = null;
    switch(props.elementType){
        case 'input':
            inputElement = <input className={styles.InputElement} {...props.elementConfig} value={props.value}/>;
            break;
        case 'textarea':
            inputElement = <textarea className={styles.InputElement} {...props.elementConfig} value={props.value}/>;
            break;
        case 'select':
            inputElement = <select className={styles.InputElement} {...props.elementConfig} value={props.value}/>
            break;
        default: 
            inputElement = <input className={styles.InputElement} {...props.elementConfig} value={props.value}/>;
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
    elementType: PropTypes.oneOf(['input','textarea','select']),
    elementConfig: PropTypes.object,
    label: PropTypes.string,
    value:PropTypes.oneOfType([PropTypes.string]),
}

input.defaultProps ={
    elementType:'input',
    elementConfig:{},
    label: "",
    value: ""
}

export default input;
