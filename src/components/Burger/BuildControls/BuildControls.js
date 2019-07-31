import React from 'react';
import PropTypes from 'prop-types';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const buildControls =(props) => {
    return (
        <div className={styles.BuildControls}>
            <BuildControl/>
        </div>
    );
}

buildControls.propTypes ={
}

buildControls.defaultProps ={
}

export default buildControls;
