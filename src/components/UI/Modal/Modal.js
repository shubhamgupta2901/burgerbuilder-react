import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const modal =(props) => {
    return (
        <React.Fragment>
            <Backdrop visible={props.visible} onClick={props.onBackdropClicked}/>
            <div 
                className={styles.Modal}
                style={{
                    transform: props.visible ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.visible  ? 1 : 0,
                }}
            >
                {props.children}
            </div>
        </React.Fragment>
    );
}

modal.propTypes ={
    visible: PropTypes.bool,
    onBackdropClicked: PropTypes.func,
}

modal.defaultProps ={
    visible: true,
    onBackdropClicked: ()=>{}
}

export default modal;
