import React from 'react';
import PropTypes from 'prop-types';
import styles from './BuildControl.module.css';

const buildControl =(props) => {
    return (
        <div className={styles.BuildControl}>
            <div className={styles.Label}>{props.label}</div>
            <button className={styles.More} onClick={()=>props.onAddIngredient(props.type)}>More</button>
            <button className={styles.Less} onClick={()=>props.onRemoveIngredient(props.type)}>Less</button>
        </div>
    );
}

buildControl.propTypes ={
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onAddIngredient: PropTypes.func,
    onRemoveIngredient: PropTypes.func,
}

buildControl.defaultProps ={
    label: '',
    type: '',
    onAddIngredient: ()=>{},
    onRemoveIngredient: () => {},
}

export default buildControl;
