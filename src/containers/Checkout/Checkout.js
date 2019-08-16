import React from 'react';
import PropTypes from 'prop-types'
import {Route} from 'react-router-dom';
import queryString from 'query-string'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData';
import { privateEncrypt } from 'crypto';
class Checkout extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        ingredients:{}, 
        price: 0,
    }
  }

  componentDidMount(){
    const query = queryString.parse(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for(let [key,value] of Object.entries(query)){
      if(key === 'price')
        price = parseFloat(value);
      else
        ingredients[key] = value;
    }
    this.setState({ingredients, price})
  }

  onCancel = () =>{
    console.log("Checkout Cancel");
    this.props.history.goBack();
  }
ß
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
              <Route 
                path={this.props.match.path + '/contact-data'} 
                render = {(props) =>
                  <ContactData 
                    {...props}
                    ingredients= {this.state.ingredients}
                    price={this.state.price}
                  />}
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
