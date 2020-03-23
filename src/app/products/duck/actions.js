import types from './types';

const add = (item, itemCategory) => ({
    type: types.ADD_PRODUCT, item,  itemCategory
})

const reset = item => ({
    type: types.RESET_PRODUCTS, item
})

export default {
    add,
    reset
}