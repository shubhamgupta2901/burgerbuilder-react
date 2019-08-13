import React from 'react';
import PropTypes from 'prop-types'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'

class Checkout extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        ingredients:{
            salad: 1,
            cheese: 1,
            meat: 1,
            bacon: 1
        }
    }
  }
  render(){
    return (
        <div>
            <CheckoutSummary ingredients={this.state.ingredients}/>
        </div>
    );
  }
}

Checkout.propTypes ={
}

Checkout.defaultProps ={
}

export default Checkout;
