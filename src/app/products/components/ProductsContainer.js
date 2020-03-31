import React from 'react';
import { connect } from 'react-redux';
import actions from '../duck/actions';



const ProductsCotainer = (props) => {

    const { fruitList, vegetableList, dairyList, meatAndFishList, dryGoodsList, householdItemsList, othersList } = props.products;

    const handleDeleteClick = (e) => {
        console.log(e.target.value)
        for (let list of Object.keys(props.products)) {

            props.deleteProduct(props.products[list][e.target.id], e.target.id)
        }
    }

    // const handleDeleteClickFruit = (e) => {
    //     props.deleteProduct(fruitList[e.target.id], e.target.id)
    // };

    // const handleDeleteClickVegetable = (e) => {
    //     props.deleteProduct(vegetableList[e.target.id], e.target.id)
    // };

    // const handleDeleteClickDairy = (e) => {
    //     props.deleteProduct(dairyList[e.target.id], e.target.id)
    // };

    // const handleDeleteClickMeatAndFish = (e) => {
    //     props.deleteProduct(meatAndFishList[e.target.id], e.target.id)
    // };

    // const handleDeleteClickDryGoods = (e) => {
    //     props.deleteProduct(dryGoodsList[e.target.id], e.target.id)
    // };

    // const handleDeleteClickHouseholdItems = (e) => {
    //     props.deleteProduct(householdItemsList[e.target.id], e.target.id)
    // };

    // const handleDeleteClickOthers = (e) => {
    //     props.deleteProduct(othersList[e.target.id], e.target.id)
    // };

    return (<div>
        <h1>
            {fruitList.length !== 0 ? 'fruits' : ''}
        </h1>
        <ul>
            {fruitList.map((product) =>
                <li

                    id={fruitList.indexOf(product)}
                    key={product}
                    onClick={handleDeleteClick}>
                    {product}
                </li>)}
        </ul>

        <h1>
            {vegetableList.length !== 0 ? 'vegetables' : ''}
        </h1>
        <ul>
            {vegetableList.map(product =>
                <li key={product}
                    id={vegetableList.indexOf(product)}
                    onClick={handleDeleteClick}>
                    {product}
                </li>)}
        </ul>

        <h1>
            {dairyList.length !== 0 ? 'dairy' : ''}
        </h1>
        <ul>
            {dairyList.map(product =>
                <li key={product}
                    id={dairyList.indexOf(product)}
                    onClick={handleDeleteClick}>
                    {product}
                </li>)}
        </ul>

        <h1>
            {meatAndFishList.length !== 0 ? 'meat and fish' : ''}
        </h1>
        <ul>
            {meatAndFishList.map(product =>
                <li key={product}
                    id={meatAndFishList.indexOf(product)}
                    onClick={handleDeleteClick}>
                    {product}
                </li>)}
        </ul>

        <h1>
            {dryGoodsList.length !== 0 ? 'dry goods' : ''}
        </h1>
        <ul>
            {dryGoodsList.map(product =>
                <li key={product}
                    id={dryGoodsList.indexOf(product)}
                    onClick={handleDeleteClick}>
                    {product}
                </li>)}
        </ul>

        <h1>
            {householdItemsList.length !== 0 ? 'household items' : ''}
        </h1>
        <ul>
            {householdItemsList.map(product =>
                <li key={product}
                    id={householdItemsList.indexOf(product)}
                    onClick={handleDeleteClick}>
                    {product}
                </li>)}
        </ul>

        <h1>
            {othersList.length !== 0 ? 'others' : ''}
        </h1>
        <ul>
            {othersList.map(product =>
                <li key={product}
                    id={othersList.indexOf(product)}
                    onClick={handleDeleteClick}>
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