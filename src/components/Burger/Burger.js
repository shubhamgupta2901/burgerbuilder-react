import React from 'react';
import PropTypes from 'prop-types';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger =(props) => {
    function renderIngredients(){
        const burgerIngredients = [];
        for(let[igName, igQuantity] of Object.entries(props.ingredients)){
            for(let i = 0; i<igQuantity; i++){
                burgerIngredients.push(<BurgerIngredient type={igName}/>);
            }
        }
        return(
            <React.Fragment>
                {burgerIngredients}
            </React.Fragment>
            
        );
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
    ingredients:{
        
    }
}

export default burger;

