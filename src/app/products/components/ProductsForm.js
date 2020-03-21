import React from 'react';
import { connect } from 'react-redux';
import actions from '../duck/actions';


const ProductsForm = (props) => {

    console.log(props)
    const productInput = React.createRef()

    const addProduct = (event) => {

        event.preventDefault()

        props.add(productInput.current.value)
        console.log(productInput.current.value)
        productInput.current.value = '';
    }


    return <form onSubmit={addProduct}>
        <input ref={productInput}></input>

        <label for="category">Choose a category:</label>

            <select id="productCategory">
            <option value="fruit">fruit</option>
            <option value="vegetable">vegetable</option>
            <option value="dairy">dairy</option>
            <option value="meat">meat</option>
            <option value="fish">fruit</option>
            <option value="household ites">householditems</option>
            <option value="dairy">dairy</option>
            <option value="dry goods">dry goods</option>
            <option value="others">others</option>
            </select> 
            <label>important</label>
            <input type="checkbox" value="important"/> 
            
        <button type='submit'>Add product</button>

    </form>
}

const mapDispatchToProps = dispatch => ({
    add: product => dispatch(actions.add(product))
})

export default connect(null, mapDispatchToProps)(ProductsForm);