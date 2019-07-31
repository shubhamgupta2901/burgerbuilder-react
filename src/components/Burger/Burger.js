import React from 'react';
import PropTypes from 'prop-types';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import * as Utils from '../../utils/Utils';


const burger =(props) => {
    function renderIngredients(){
        let burgerIngredients = [];
        for(let[igName, igQuantity] of Object.entries(props.ingredients)){
            for(let i = 0; i<igQuantity; i++){
                burgerIngredients.push(<BurgerIngredient key={Utils.generateUniqueId()} type={igName}/>);
            }
        }
        if(burgerIngredients.length === 0)
            burgerIngredients = <p>Please start adding ingredients.</p>
        
        return burgerIngredients;
    }
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type={"bread-top"}/>
            {renderIngredients()}
            <BurgerIngredient type={"bread-bottom"}/>
        </div>
    );
}   

burger.propTypes ={
    ingredients: PropTypes.object,
}

burger.defaultProps ={
    ingredients:{}
}

export default burger;

