import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.module.css';
import * as Utils from '../../../utils/Utils'

const orderSummary =(props) => {
    
    const getIngredientSummary = () =>{
        const ingredientSummary = [];
        for(let [key, value] of Object.entries(props.ingredients)){
            if(value>0){
                const summaryElement = <li key={Utils.generateUniqueId()}><span style={{textTransform: "capitalize"}}>{key}</span> : {value}</li>;
                ingredientSummary.push(summaryElement);
            }     
        }
        return ingredientSummary;
    }
    
    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p>Delicious Burger with following contents:</p>
            <ul>
                {getIngredientSummary()}
            </ul>
        </React.Fragment>
    );
}

orderSummary.propTypes ={
    ingredients: PropTypes.object,
}

orderSummary.defaultProps ={
    ingredients: {},
}

export default orderSummary;
