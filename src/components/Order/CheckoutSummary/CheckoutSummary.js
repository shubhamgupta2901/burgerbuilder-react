import React from 'react';
import PropTypes from 'prop-types';
import Burger from '../../Burger/Burger'
import styles from './CheckoutSummary.module.css';
import Button from '../../UI/Button/Button';

const checkoutSummary =(props) => {
    return (
        <div className={styles.CheckoutSummary}>
            <h3>This is a tasty burger!</h3>
            <div style={{width:'100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>

            </div>
            <Button 
                onClick={props.onCancel}
            >
                Cancel
            </Button>
            <Button 
                btnType={"Success"}
                onClick ={props.onContinue}
            >
                Continue
            </Button>
        </div>
    );
}

checkoutSummary.propTypes ={
    ingredients: PropTypes.object,
    onContinue: PropTypes.func,
    onCancel: PropTypes.func,
}

checkoutSummary.defaultProps ={
    ingredients:{},
    onContinue: ()=>{},
    onCancel: ()=>{},
}

export default checkoutSummary;
