import types from './types';

const INITIAL_STATE = {
    listName: 'fruits',
    fruitList: [
      'apples', 'bananas', 'lemon'
    ],
    vegetableList: [
      'carrot', 'tomato'
    ],
    dairyList: [
      
    ],
    
    
  }

  const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case types.ADD_PRODUCT:
        return {
         
          ...state, 

          fruitList: 
            action.itemCategory === "fruit" ?
         [ ...state.fruitList,
            action.item ] : [...state.fruitList],

          vegetableList:
          action.itemCategory === "vegetable" ?
          [ ...state.vegetableList,
             action.item ] : [...state.vegetableList],

          dairyList:
          action.itemCategory === "dairy" ?
          [ ...state.dairyList,
          action.item ] : [...state.dairyList], 
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