import types from './types';

const INITIAL_STATE = {
    listName: 'fruits',
    list: [
      'apples', 'bananas', 'lemon'
    ]
  }

  const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case types.ADD_PRODUCT:
        return {
          ...state, list: [...state.list, action.item - action.itemCategory - action.isImportant]
        }
      case types.RESET_PRODUCTS:
        return {
          ...state, list: []
        }
      default:
        return state
    }
  }

  export default productsReducer;