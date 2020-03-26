import React from 'react';
import { connect } from 'react-redux';
import actions from '../duck/actions';



const ProductsCotainer = (props) => {
    const handleDeleteClick = (e) => {
    console.log('delete')
    console.log(e.target.id)
    e.preventDefault()
    props.deleteProduct('vegetable', e.target.id)

};
return( <div>
        <h1>
            { props.products.fruitList.length !== 0 ?  'fruits'  : ''}
        </h1>
        <ul>
            {props.products.fruitList.map(product =>
                 <li key ={product}
                  id={props.products.fruitList.indexOf(product)}
                  onClick={handleDeleteClick}>
                      {product} 
                      </li> )}
        </ul>

        <h1>
            { props.products.vegetableList.length !== 0 ?  'vegetables'  : ''}
        </h1>
        <ul>
            {props.products.vegetableList.map(product => 
             <li key ={product}
             id={props.products.vegetableList.indexOf(product)}
             onClick={handleDeleteClick}>
                {product}
                </li>)}
        </ul>
      
        <h1>
            { props.products.dairyList.length !== 0 ?  'dairy'  : ''}
        </h1>
        <ul>
            {props.products.dairyList.map(product => <li>{product}</li>)}
        </ul>
        
        <h1>
            { props.products.meatAndFishList.length !== 0 ?  'meat and fish'  : ''}
        </h1>
        <ul>
            {props.products.meatAndFishList.map(product => <li>{product}</li>)}
        </ul>

        <h1>
            { props.products.dryGoodsList.length !== 0 ?  'dry goods'  : ''}
        </h1>
        <ul>
            {props.products.dryGoodsList.map(product => <li>{product}</li>)}
        </ul>

        <h1>
            { props.products.householdItemsList.length !== 0 ?  'household items'  : ''}
        </h1>
        <ul>
            {props.products.householdItemsList.map(product => <li>{product}</li>)}
        </ul>
        
        <h1>
            { props.products.othersList.length !== 0 ?  'others'  : ''}
        </h1>
        <ul>
            {props.products.othersList.map(product => <li>{product}</li>)}
        </ul>
    </div>

)}

const mapStateToProps = state => ({
    products: state.products
})

const mapDispatchToProps = dispatch => ({
    deleteProduct: (category, productId) => dispatch(actions.deleteProduct(category,productId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsCotainer)