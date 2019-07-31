import React from 'react';
import PropTypes from 'prop-types';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]
const buildControls =(props) => {
 
    return (
        <div className={styles.BuildControls}>
            <p>Current Price: <strong>${props.totalPrice.toFixed(2)}</strong></p>
            {controls.map(control => 
                <BuildControl 
                    key={control.type} 
                    type = {control.type}
                    label={control.label}
                    onAddIngredient={props.onAddIngredient}
                    onRemoveIngredient={props.onRemoveIngredient}
                />
            )}
            <button className={styles.OrderButton} disabled = {!props.purchasable}>ORDER NOW</button>
        </div>
    );
}
    
buildControls.propTypes ={
    totalPrice: PropTypes.number,
    purchasable: PropTypes.bool,
    onAddIngredient: PropTypes.func,
    onRemoveIngredient: PropTypes.func,
}

buildControls.defaultProps ={
    totalPrice: 0,
    purchasable: false,
    onAddIngredient: ()=>{},
    onRemoveIngredient: () => {},
}

export default buildControls;
