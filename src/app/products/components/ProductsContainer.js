import React from 'react';
import { connect } from 'react-redux';


const ProductsCotainer = (props) => 
    <ul>
        {props.products.list.map(product => <li>{product}</li>)}
    </ul>


const mapStateToProps = state => ({
    products: state.products
})

export default connect(mapStateToProps, {})(ProductsCotainer)