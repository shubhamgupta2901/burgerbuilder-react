import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.css';

const order =(props) => {
    return (
        <div className={styles.Order}>
            <p> Ingredients: {props.ingredients}</p>
            <p>Price: <strong>USD {props.price}</strong></p>
        </div>
    );
}

order.propTypes ={
    ingredients: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

order.defaultProps ={
    ingredients: " ",
    price:"",
}

export default order;
