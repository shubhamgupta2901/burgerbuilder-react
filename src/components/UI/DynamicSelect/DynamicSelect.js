import React from 'react';
import PropTypes from 'prop-types'

class DynamicSelect extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  onChange = (event) => {
      //let selectedValue = event.target.value;
      this.props.onChange(event);
  }
  render(){
    const optionComponents = this.props.options.map(option =>
            <option
                key={option.key}
                value = {option.value}
            >    
                {option.displayValue}
            </option>
        );
    return (
        <select 
            name={this.props.name} 
            className={this.props.className} 
            onChange={this.props.onChange}
            {...this.props}
        >
            {optionComponents}
        </select>
    );
  }
}

DynamicSelect.propTypes ={
    name: PropTypes.string,
    className: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.exact({
            key: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
            value: PropTypes.string,
            displayValue:PropTypes.string,
        })
    ),
    onChange: PropTypes.func,
}

DynamicSelect.defaultProps ={
    name: '',
    className:'',
    options: [{ key: '', value: '', displayValue: ''}],
    onChange: ()=>{}
}

export default DynamicSelect;
