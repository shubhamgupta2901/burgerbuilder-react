import React from 'react';
import PropTypes from 'prop-types'
import styles from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button'

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
        }
    }
  }

  render(){
    return (
        <div className={styles.ContactData}>
            <h4>Enter your contact data</h4>
            <form>
                <input type="text" name ="name" placeholder="Your name"></input>
                <input type="email" name ="email" placeholder="Your email"></input>
                <input type="text" name ="street" placeholder="Street"></input>
                <input type="text" name ="postalCode" placeholder="Postalcode"></input>
                <Button>ORDER</Button>
            </form>
        </div>
    );
  }
}

ContactData.propTypes ={
}

ContactData.defaultProps ={
}

export default ContactData;
