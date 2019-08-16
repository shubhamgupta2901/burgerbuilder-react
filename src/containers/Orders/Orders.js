import React from 'react';
import PropTypes from 'prop-types'
import styles from './Orders.module.css';
import Order from '../../components/Order/Order';

class Orders extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render(){
    return (
        <div>   
            <Order/>
            <Order/>
        </div>
        
    );
  }
}

Orders.propTypes ={
}

Orders.defaultProps ={
}

export default Orders;
