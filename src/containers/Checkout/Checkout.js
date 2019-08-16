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

  onCancel = () =>{
    console.log("Checkout Cancel");
    this.props.history.goBack();
  }

  onContinue = () =>{
    console.log("Checkout continue");
    this.props.history.replace('checkout/contact-data');
  }
  render(){
    return (
        <div>
            <CheckoutSummary 
              ingredients={this.state.ingredients}
              onCancel={this.onCancel}
              onContinue = {this.onContinue}
              />
        </div>
    );
  }
}

Checkout.propTypes ={
}

Checkout.defaultProps ={
}

export default Checkout;
