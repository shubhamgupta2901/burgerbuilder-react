import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.module.css';
import * as Utils from '../../../utils/Utils';
import Button from '../../UI/Button/Button';

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
            <p>Total price: ${props.totalPrice.toFixed(2)}.</p>
            <p>Do you wish to continue?</p>
            <Button onClick={props.onCancel} btnType={"Danger"}>Cancel</Button>
            <Button onClick={props.onCancel} btnType={"Success"}>Continue</Button>
        </React.Fragment>
    );
}

orderSummary.propTypes ={
    ingredients: PropTypes.object,
    totalPrice: PropTypes.number,
    onContinue:PropTypes.func,
    onCancel: PropTypes.func,
}

orderSummary.defaultProps ={
    ingredients: {},
    totalPrice: 0,
    onContinue: ()=>{},
    onCancel:()=>{},
}

export default orderSummary;
