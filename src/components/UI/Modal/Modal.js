import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends React.Component{

    // 
    /**
     * Update modal only when its visibility changes OR a children changes
     * This will improve some performance as we would not be updating contents of modal even when its visibilty is not changing.
     */
    shouldComponentUpdate(nextProps, nextState) {
        const shouldComponentUpdate = nextProps.visible !== this.props.visible || nextProps.children !== this.props.children;
        return shouldComponentUpdate; 
    }

    render(){
        return (
            <React.Fragment>
                <Backdrop visible={this.props.visible} onClick={this.props.onBackdropClicked}/>
                <div 
                    className={styles.Modal}
                    style={{
                        transform: this.props.visible ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.visible  ? 1 : 0,
                    }}
                >
                    {this.props.children}
                </div>
            </React.Fragment>
        );
    }
}

Modal.propTypes ={
    visible: PropTypes.bool,
    onBackdropClicked: PropTypes.func,
}

Modal.defaultProps ={
    visible: true,
    onBackdropClicked: ()=>{}
}

export default Modal;
