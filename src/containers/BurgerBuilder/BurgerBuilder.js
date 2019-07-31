import React from 'react';
import PropTypes from 'prop-types'
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ingredients:{
        salad:0,
        bacon:0,
        cheese:0,
        meat:0  
      }
    }
  }
  render(){
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients}/>
        <div>Build Controls</div>
    </React.Fragment>
    );
  }
}

BurgerBuilder.propTypes ={
}

BurgerBuilder.defaultProps ={
}

export default BurgerBuilder;
