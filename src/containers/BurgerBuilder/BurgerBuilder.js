import React from 'react';
import PropTypes from 'prop-types'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}
class BurgerBuilder extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ingredients:{
        salad:0,
        bacon:0,
        cheese:0,
        meat:0  
      },
      totalPrice: 4,
    }
  }

  addIngredientHandler = (type) =>{
    console.log(`addIngredientHandler | type: ${type}`);
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount+1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;
    let totalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({ingredients: updatedIngredients, totalPrice});

  }

  removeIngredientHandler = (type) =>{
    if(this.state.ingredients[type] === 0)
      return;
    console.log(`removeIngredientHandler | type: ${type}`);
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type]--;
    const totalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({ingredients: updatedIngredients,totalPrice});
  }

  render(){
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
          onAddIngredient={this.addIngredientHandler}
          onRemoveIngredient={this.removeIngredientHandler}
          />
    </React.Fragment>
    );
  }
}

BurgerBuilder.propTypes ={
}

BurgerBuilder.defaultProps ={
}

export default BurgerBuilder;
