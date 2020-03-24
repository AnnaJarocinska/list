import React from 'react';
import { connect } from 'react-redux';


const ProductsCotainer = (props) => 
 
<div>
    <h1> fruits </h1>

    <ul>
        
        {props.products.listOfFruits.map(product => <li>{product}</li>)}
    </ul>

    <h1> vegetables </h1>
    <ul>
        
        {props.products.listOfVegetables.map(product => <li>{product}</li>)}
    </ul>

</div>

const mapStateToProps = state => ({
    products: state.products
})

export default connect(mapStateToProps, {})(ProductsCotainer)