import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.css';

const order =(props) => {
    return (
        <div className={styles.Order}>
            <p> Ingredients: </p>
            <p>Price: <strong>USD </strong></p>
        </div>
    );
}

order.propTypes ={
}

order.defaultProps ={
}

export default order;
