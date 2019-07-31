import React from 'react';
import PropTypes from 'prop-types';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger =(props) => {
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type={"bread-top"}/>
            <BurgerIngredient type={"cheese"}/>
            <BurgerIngredient type={"meat"}/>
            <BurgerIngredient type={"bacon"}/>
            <BurgerIngredient type={"salad"}/>
            <BurgerIngredient type={"bread-bottom"}/>
        </div>
    );
}

burger.propTypes ={
}

burger.defaultProps ={
}

export default burger;

