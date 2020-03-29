import React from 'react';
import { connect } from 'react-redux';
import actions from '../duck/actions';



const ProductsCotainer = (props) => {

    const handleDeleteClickFruit = (e) => {
        e.preventDefault()
        props.deleteProduct(props.products.fruitList[e.target.id], e.target.id)
    };

    const handleDeleteClickVegetable = (e) => {
        e.preventDefault()
        props.deleteProduct(props.products.vegetableList[e.target.id], e.target.id)
    };

    const handleDeleteClickDairy = (e) => {
        e.preventDefault()
        props.deleteProduct(props.products.dairyList[e.target.id], e.target.id)
    };

    const handleDeleteClickMeatAndFish = (e) => {
        e.preventDefault()
        props.deleteProduct(props.products.meatAndFishList[e.target.id], e.target.id)
    };

    const handleDeleteClickDryGoods = (e) => {
        e.preventDefault()
        props.deleteProduct(props.products.dryGoodsList[e.target.id], e.target.id)
    };

    const handleDeleteClickHouseholdItems = (e) => {
        e.preventDefault()
        props.deleteProduct(props.products.householdItemsList[e.target.id], e.target.id)
    };

    const handleDeleteClickOthers = (e) => {
        e.preventDefault()
        props.deleteProduct(props.products.othersList[e.target.id], e.target.id)
    };

    return (<div>
        <h1>
            {props.products.fruitList.length !== 0 ? 'fruits' : ''}
        </h1>
        <ul>
            {props.products.fruitList.map((product) =>
                <li

                    id={props.products.fruitList.indexOf(product)}
                    key={product}
                    onClick={handleDeleteClickFruit}>
                    {product}
                </li>)}
        </ul>

        <h1>
            {props.products.vegetableList.length !== 0 ? 'vegetables' : ''}
        </h1>
        <ul>
            {props.products.vegetableList.map(product =>
                <li key={product}
                    id={props.products.vegetableList.indexOf(product)}
                    onClick={handleDeleteClickVegetable}>
                    {product}
                </li>)}
        </ul>

        <h1>
            {props.products.dairyList.length !== 0 ? 'dairy' : ''}
        </h1>
        <ul>
            {props.products.dairyList.map(product =>
            <li key={product}
            id={props.products.dairyList.indexOf(product)}
            onClick={handleDeleteClickDairy}>
            {product}
        </li>)}
        </ul>

        <h1>
            {props.products.meatAndFishList.length !== 0 ? 'meat and fish' : ''}
        </h1>
        <ul>
            {props.products.meatAndFishList.map(product =>
             <li key={product}
             id={props.products.meatAndFishList.indexOf(product)}
             onClick={handleDeleteClickMeatAndFish}>
             {product}
         </li>)}
        </ul>

        <h1>
            {props.products.dryGoodsList.length !== 0 ? 'dry goods' : ''}
        </h1>
        <ul>
            {props.products.dryGoodsList.map(product => 
             <li key={product}
             id={props.products.dryGoodsList.indexOf(product)}
             onClick={handleDeleteClickDryGoods}>
             {product}
         </li>)}
        </ul>

        <h1>
            {props.products.householdItemsList.length !== 0 ? 'household items' : ''}
        </h1>
        <ul>
            {props.products.householdItemsList.map(product => 
             <li key={product}
             id={props.products.householdItemsList.indexOf(product)}
             onClick={handleDeleteClickHouseholdItems}>
             {product}
         </li>)}
        </ul>

        <h1>
            {props.products.othersList.length !== 0 ? 'others' : ''}
        </h1>
        <ul>
            {props.products.othersList.map(product => 
             <li key={product}
             id={props.products.othersList.indexOf(product)}
             onClick={handleDeleteClickOthers}>
             {product}
         </li>)}
        </ul>
    </div>

    )
}

const mapStateToProps = state => ({
    products: state.products
})

const mapDispatchToProps = dispatch => ({
    deleteProduct: (item, productId) => dispatch(actions.deleteProduct(item, productId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsCotainer)