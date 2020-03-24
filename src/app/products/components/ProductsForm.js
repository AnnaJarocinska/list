import React, {Component} from 'react';
import { connect } from 'react-redux';
import actions from '../duck/actions';


class ProductsForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputValue: "",
            selectValue: "vegetable",
            isImportant:  false,
         }
    }

    handleSelectChange = (e) => {
        this.setState({
            selectValue: e.target.value
        })  
    }

    handleInputChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    } 

    handleCheckboxChange = () => {
        this.setState({
            isImportant: !this.state.isImportant
        })
    }

     addProduct =  ( event) => {
        event.preventDefault()
        this.props.add(this.state.inputValue,this.state.selectValue, this.state.isImportant)
        // this.props.add(this.state.inputValue)
        // this.props.add(this.state.selectValue)
        // this.props.add(this.state.isImportant )

        console.log( this.state.selectValue)
        console.log( this.state.inputValue)
        console.log( this.state.isImportant)
     }

    render() {
        return ( <form onSubmit={this.addProduct}>
            <input value ={ this.state.inputValue} onChange={this.handleInputChange}></input>
    
            <label for="category">Choose a category:</label>
                <select value = {this.state.selectValue} onChange={this.handleSelectChange}>
                <option value="fruit">fruit</option>
                <option value="vegetable">vegetable</option>
                <option value="dairy">dairy</option>
                <option value="meat">meat</option>
                <option value="fish">fish</option>
                <option value="household ites">household items</option>
                <option value="dairy">dairy</option>
                <option value="dry goods">dry goods</option>
                <option value="others">others</option>
                </select> 
                <label>important</label>
                <input type="checkbox"  onChange={this.handleCheckboxChange}/> 
            <button type='submit'>Add product</button>
        </form> );
    }
}


 const mapDispatchToProps = dispatch => ({
    add: (product, category, importance) => dispatch(actions.add(product, category, importance ))
})


     export default connect(null, mapDispatchToProps)(ProductsForm);
 
    