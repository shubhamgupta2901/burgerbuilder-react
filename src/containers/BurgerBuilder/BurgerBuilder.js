import React from 'react';
import PropTypes from 'prop-types'
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ingredients:{
        salad:1,
        bacon:1,
        cheese:2,
        meat:2  
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
