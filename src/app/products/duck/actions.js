import types from './types';

const add = (item, itemCategory, isImportant) => ({
    type: types.ADD_PRODUCT, item,  itemCategory, isImportant
})

const reset = item => ({
    type: types.RESET_PRODUCTS, item
})

export default {
    add,
    reset
}