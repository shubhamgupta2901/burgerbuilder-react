import React from 'react';
import PropTypes from 'prop-types';
import styles from './BuildControl.module.css';

const buildControl =(props) => {
    return (
        <div className={styles.BuildControl}>
            <div className={styles.Label}>{props.label}</div>
            <button className={styles.Less}>Less</button>
            <button className={styles.Less}>More</button>
        </div>
    );
}

buildControl.propTypes ={
    label: PropTypes.string,
}

buildControl.defaultProps ={
    label: 'salami',
}

export default buildControl;
