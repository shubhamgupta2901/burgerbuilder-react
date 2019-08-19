import React from 'react';
import PropTypes from 'prop-types'
import axios from '../../../axios-orders';
import styles from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';


class ContactData extends React.Component {
  constructor(props){
    super(props);
    console.log("ContactData consturctor")
    this.state = {
        orderForm:{
          name: this.createElementConfig('input', {type: 'text', placeholder: 'Your name'}, 'Ronald Weasely'),
          street: this.createElementConfig('input', {type: 'text', placeholder: 'Street Name'}, 'Weaseley Manor'),
          zipCode: this.createElementConfig('input', {type: 'text', placeholder: 'Zipcode'}, '934'),
          country: this.createElementConfig('input', {type: 'text', placeholder: 'Country'}, 'Britain'),
          email: this.createElementConfig('input',{type: 'email', placeholder: 'Email address'},'sectumsempra@gmail.com'),
          deliveryMethod: this.createElementConfig('select',{options: [
              {value:'fastest', displayValue: 'Fastest'},
              {value:'cheapest', displayValue: 'Cheapest'},
            ]},'sectumsempra@gmail.com'),
        },
        loading: false,
    }
  }

  createElementConfig = (elementType = 'input', elementConfig = {type: 'text', placeholder:'placeholder'},value = '') => {
    return {
        elementType,
        elementConfig,
        value,
    };
  }
  onBurgerOrdered = async (event) =>{
    event.preventDefault();
    console.log(this.props.ingredients);

    console.log('onPurchaseContinue')
    const order = {
      ingredients: this.props.ingredients,
      price: parseFloat(this.props.price).toFixed(2),
      
    }
    try {
      this.setState({loading: true});
      const response = await axios.post('/orders.json',order);
      this.setState({loading: false});
      this.props.history.push({pathname: '/'});
    } catch (error) {
      console.log(error);
      this.setState({loading: false});
    }

  }

  renderSpinner = () =>{
    return <Spinner/>;
  }

  renderContactData = () =>{
    return (
      <div >
          <h4>Enter your contact data</h4>
          <form>
              <Input 
                elementType={this.state.orderForm.name.elementType} 
                value={this.state.orderForm.name.value} 
                elementConfig={this.state.orderForm.name.elementConfig}
                label= {"Name"}
              />
              <Button onClick={(event)=>this.onBurgerOrdered(event)} btnType="Success">ORDER</Button>
          </form>
      </div>
    );
  }
  render(){ 
      return (
        <div className={styles.ContactData}>
            {this.state.loading ? this.renderSpinner() : this.renderContactData()}
        </div>
    );
  }
}

ContactData.propTypes ={
  ingredients: PropTypes.object,

}

ContactData.defaultProps ={
  ingredients: PropTypes.object,
}

export default ContactData;
