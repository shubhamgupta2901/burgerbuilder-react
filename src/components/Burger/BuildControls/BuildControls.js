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
            {controls.map(control => 
                <BuildControl 
                    key={control.type} 
                    type = {control.type}
                    label={control.label}
                    onAddIngredient={props.onAddIngredient}
                    onRemoveIngredient={props.onRemoveIngredient}
                />
            )}
        </div>
    );
}
    
buildControls.propTypes ={
    onAddIngredient: PropTypes.func,
    onRemoveIngredient: PropTypes.func,
}

buildControls.defaultProps ={
    onAddIngredient: ()=>{},
    onRemoveIngredient: () => {},
}

export default buildControls;
