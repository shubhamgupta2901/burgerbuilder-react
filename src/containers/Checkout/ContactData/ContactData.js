import React from 'react';
import PropTypes from 'prop-types'
import axios from '../../../axios-orders';
import styles from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';


class ContactData extends React.Component {
  constructor(props){
    super(props);
    console.log("ContactData consturctor")
    this.state = {
        name:'',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
        loading: false,
    }
  }
  onBurgerOrdered = async (event) =>{
    event.preventDefault();
    console.log(this.props.ingredients);

    console.log('onPurchaseContinue')
    const order = {
      ingredients: this.props.ingredients,
      price: parseFloat(this.props.price).toFixed(2),
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
              <input type="text" name ="name" placeholder="Your name"></input>
              <input type="email" name ="email" placeholder="Your email"></input>
              <input type="text" name ="street" placeholder="Street"></input>
              <input type="text" name ="postalCode" placeholder="Postalcode"></input>
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
