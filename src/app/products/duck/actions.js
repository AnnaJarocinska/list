import types from './types';

const add = (item, itemCategory, isImportant) => ({
    type: types.ADD_PRODUCT, item,  itemCategory, isImportant
})

const reset = item => ({
    type: types.RESET_PRODUCTS, item
})

const deleteProduct = (item, itemCategory, id) => ({
    type: types.DELETE_PRODUCT, item, itemCategory, id
})
export default {
    add,
    reset,
    deleteProduct
}