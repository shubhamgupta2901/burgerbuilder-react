import React from 'react';
import PropTypes from 'prop-types'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
// import axios from 'axios';


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
      showOrderSummary: false,
    }
  }

  addIngredientHandler = (type) =>{
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
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type]--;
    const totalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({ingredients: updatedIngredients,totalPrice});
  }

  isBurgerPurchable = () =>{
    for(let [key,value] of Object.entries(this.state.ingredients)){
      if(value>0)
        return true;
    }
    return false;
  }

  onShowOrderSummary = () => {
    this.setState({showOrderSummary: true});
  }

  onHideOrderSummary = () =>{
    console.log(`onHideOrderSummary`)
    this.setState({showOrderSummary: false});
  }

  onPurchaseContinue = async () =>{  

    console.log('onPurchaseContinue')
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Ronald Weasly',
        address: {
          street: 'Weasly Res',
          zipCode: '934',
          country: 'Britain'
        },
        email: 'sectumsempra@gmail.com'
      },
      deliveryMethod: 'fastest',
    }
    try {
      const response = await axios.post('/orders.json',order);
      console.log(response);
      this.onHideOrderSummary();
    } catch (error) {
      console.log(error);
    }
    
  }
  render(){
    return (
      <React.Fragment>
        <Modal 
          visible={this.state.showOrderSummary}
          onBackdropClicked = {this.onHideOrderSummary}
          > 
          <OrderSummary 
            ingredients={this.state.ingredients}
            totalPrice={this.state.totalPrice}
            onContinue= {this.onPurchaseContinue}
            onCancel = {this.onHideOrderSummary}
            />
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
          totalPrice={this.state.totalPrice}
          purchasable={this.isBurgerPurchable()}
          onAddIngredient={this.addIngredientHandler}
          onRemoveIngredient={this.removeIngredientHandler}
          onCheckout ={this.onShowOrderSummary}
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
