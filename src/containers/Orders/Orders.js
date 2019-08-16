import React from 'react';
import PropTypes from 'prop-types'
import styles from './Orders.module.css';
import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      orders: [],
    }
  }

  componentDidMount = async ()=> {
    this.setState({loading: true});
    try {
      const response = await axios.get('orders.json');
      const orders = [];
      for(let[key,value] of Object.entries(response.data)){
        orders.push({
          id: key,
          ingredients: value.ingredients,
          price: value.price, 
        })
      }
      this.setState({loading: false, orders});
    } catch (error) {
      console.log(error);
      this.setState({loading:false});
    }
  }

 
  renderSpinner(){
    return <Spinner/>;
  }

  renderOrders(){
    const orderComponents = this.state.orders.map(order => {
      const ingredientsArr = [];
      if(order.ingredients){
        for(let [key,value] of Object.entries(order.ingredients)){
          ingredientsArr.push(`${key}(${value})`);
        }
      }
      return <Order key={order.id} ingredients= {ingredientsArr.join(' , ')} price={order.price}/>;
    })

    return <div>{orderComponents}</div>;
    
  }
  render(){
    return this.state.loading ? this.renderSpinner() : this.renderOrders() ;
  }
}

Orders.propTypes ={
}

Orders.defaultProps ={
}

export default withErrorHandler(Orders,axios);
