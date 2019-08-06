import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.module.css';
import * as Utils from '../../../utils/Utils';
import Button from '../../UI/Button/Button';

class OrderSummary extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    getIngredientSummary = () =>{
        const ingredientSummary = [];
        for(let [key, value] of Object.entries(this.props.ingredients)){
            if(value>0){
                const summaryElement = <li key={Utils.generateUniqueId()}><span style={{textTransform: "capitalize"}}>{key}</span> : {value}</li>;
                ingredientSummary.push(summaryElement);
            }     
        }
        return ingredientSummary;
    }
    render(){
        return (
            <React.Fragment>
                <h3>Your Order</h3>
                <p>Delicious Burger with following contents:</p>
                <ul>
                    {this.getIngredientSummary()}
                </ul>
                <p>Total price: ${this.props.totalPrice.toFixed(2)}.</p>
                <p>Do you wish to continue?</p>
                <Button onClick={this.props.onCancel} btnType={"Danger"}>Cancel</Button>
                <Button onClick={this.props.onContinue} btnType={"Success"}>Continue</Button>
            </React.Fragment>
        );
    }
}

OrderSummary.propTypes ={
    ingredients: PropTypes.object,
    totalPrice: PropTypes.number,
    onContinue:PropTypes.func,
    onCancel: PropTypes.func,
}

OrderSummary.defaultProps ={
    ingredients: {},
    totalPrice: 0,
    onContinue: ()=>{},
    onCancel:()=>{},
}

export default OrderSummary;

