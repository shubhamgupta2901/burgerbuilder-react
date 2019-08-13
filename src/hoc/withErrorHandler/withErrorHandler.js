import React from 'react';
import Modal from '../../components/UI/Modal/Modal'

/**
 * This is a Higher Order Component. It is a function that takes a WrappedComponent and returns an EnhancedComponent.
 * In this case we are using this component to display an error modal whenever there is an error while receiving response from axios.
 * In this HOC, We take the instance of axios the WrappedComponent is using and hook response interceptors to it, whenever an error is returned instead 
 * of response, we show our modal.
 * @param {*} WrappedComponent 
 * @param {*} axios 
 */
const withErrorHandler = (WrappedComponent,axios) => {
    class WithErrorHandler extends React.Component{
        constructor(props){
            super(props);
            this.state={error: null}
        }
        componentWillMount(){
            if(axios){
                //Every time this axios instance sends a request clear the error state of component
                this.requestInterceptor = axios.interceptors.request.use((request, error)=>{
                    this.setState({error:null});
                    return request;
                })
                
                /**
                 * Every time a request is made using this instance of axios, and we encounter an error, this interceptor
                 * will set the error state of this component with the error we receive via axios instance. 
                 */
                this.responseInterceptor = axios.interceptors.response.use(response => response, error =>{
                    this.setState({error});
                })
            }
        }

        componentWillUnmount(){
            if(axios){
                axios.interceptors.request.eject(this.requestInterceptor);
                axios.interceptors.response.eject(this.responseInterceptor);
            }
        }


        render(){
            return(
                <React.Fragment>
                    <Modal 
                        visible={this.state.error}
                        onBackdropClicked = {()=>{this.setState({error: null})}}
                        >
                        {this.state.error ? this.state.error.message : `Something didn't work!`}
                    </Modal>
                    <WrappedComponent
                        {...this.props}
                    />     
                </React.Fragment>
                
            )
        }
    }
    /**
     * The container components created by HOCs show up in the React Developer Tools like any other component. 
     * To ease debugging, choose a display name that communicates that it’s the result of a HOC.
     */
    WithErrorHandler.displayName =`WithErrorHandler(${getDisplayName(WrappedComponent)})`;
    //Returning the EnhancedComponent
    return WithErrorHandler;
}
function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

export default withErrorHandler;
