import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../duck/actions';


class ProductsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            selectValue: "vegetable",
            isImportant: false,
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

    handleResetClick = () => {
        this.props.reset()
    }

    addProduct = (event) => {
        event.preventDefault()
        this.props.add(this.state.inputValue, this.state.selectValue, this.state.isImportant)
    }

    render() {
        return (<form onSubmit={this.addProduct}>
            <input value={this.state.inputValue} onChange={this.handleInputChange}></input>

            <label for="category">Choose a category:</label>
            <select value={this.state.selectValue} onChange={this.handleSelectChange}>
                <option value="fruit">fruit</option>
                <option value="vegetable">vegetable</option>
                <option value="dairy">dairy</option>
                <option value="meatandfish">meat and fish</option>
                <option value="drygoods">dry goods</option>
                <option value="householditems">household items</option>
                <option value="others">others</option>
            </select>
            <label>important</label>
            <input type="checkbox" onChange={this.handleCheckboxChange} />
            <button type='submit'>Add product</button>
      
        <button onClick ={this.handleResetClick}> reset list </button>
        </form>)
    
        }
}


const mapDispatchToProps = dispatch => ({
    add: (product, category, importance) => dispatch(actions.add(product, category, importance)),
    reset: () => dispatch(actions.reset())
})


export default connect(null, mapDispatchToProps)(ProductsForm);

