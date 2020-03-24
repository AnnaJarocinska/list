import types from './types';

const INITIAL_STATE = {
    listName: 'fruits',
    listOfFruits: [
      'apples', 'bananas', 'lemon'
    ],
    listOfVegetables: [
      'carrot', 'tomato'
    ]
    
  }

  const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case types.ADD_PRODUCT:
        return {
         
          ...state, 
          listOfFruits: [...state.listOfFruits,
            action.itemCategory === "fruit" &&
            action.item ],

          listOfVegetables: [...state.listOfVegetables,
            action.itemCategory === "vegetable" &&
            action.item],

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