import React from 'react';
import PropTypes from 'prop-types'
import styles from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showSideDrawer: false,
    }
  }

  toggleSideDrawerHandler = () =>{
    this.setState(prevState=>({showSideDrawer: !prevState.showSideDrawer}))
  }


  render(){
    return (
        <React.Fragment>
            <Toolbar onSideDrawerToggle = {this.toggleSideDrawerHandler}/>
            <SideDrawer 
              visible={this.state.showSideDrawer}
              closed={this.toggleSideDrawerHandler}/>
            <main className={styles.Content}>
                {this.props.children}
            </main>
        </React.Fragment>
    );
  }
}

Layout.propTypes ={
}

Layout.defaultProps ={
}

export default Layout;

