import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const button =(props) => {
    return (
        <button onClick={props.onClick} className={[styles.Button, styles[props.btnType]].join(' ')}>{props.children}</button>
    );
}

button.propTypes ={
    onClick: PropTypes.func,
    btnType: PropTypes.oneOf(['Neutral','Success','Danger'])
}

button.defaultProps ={
    onClick: ()=>{},
    btnType: 'Neutral'
}

export default button;
