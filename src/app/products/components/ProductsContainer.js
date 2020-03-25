import React from 'react';
import { connect } from 'react-redux';


const ProductsCotainer = (props) =>


    <div>
        <h1> fruits </h1>
        <ul>

            {props.products.fruitList.map(product => <li>{product}</li>)}
        </ul>

        <h1> vegetables </h1>
        <ul>

            {props.products.vegetableList.map(product => <li>{product}</li>)}
        </ul>

        {/* <h1>
 { props.products.dairyList.map(product => <li>{product}</li>) == '' ?  ''  : 'dairy'}

</h1> */}
<h1>
 { props.products.dairyList != '' ?  'dairy'  : ''}

</h1>
        
        <ul>
            {props.products.dairyList.map(product => <li>{product}</li>)}
        </ul>

    </div>

const mapStateToProps = state => ({
    products: state.products
})

export default connect(mapStateToProps, {})(ProductsCotainer)