import types from './types';

const INITIAL_STATE = {

    listName: 'shopping list',

    fruitList: ['apples', 'bananas', 'lemon'],

    vegetableList: ['carrot', 'tomato'],

    dairyList: [],

    meatAndFishList: [],

    dryGoodsList: [],

    householdItemsList: [],

    othersList: [],
    
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

          meatAndFishList:
          action.itemCategory === "meatandfish" ?
          [ ...state.meatAndFishList,
          action.item ] : [...state.meatAndFishList], 

          dryGoodsList:
          action.itemCategory === "drygoods" ?
          [ ...state.dryGoodsList,
          action.item ] : [...state.dryGoodsList], 

          householdItemsList:
          action.itemCategory === "householditems" ?
          [ ...state.householdItemsList,
          action.item ] : [...state.householdItemsList],
          
          othersList:
          action.itemCategory === "others" ?
          [ ...state.othersList,
          action.item ] : [...state.othersList], 
        }

      case types.RESET_PRODUCTS:
        return {
          
          fruitList: [],
          vegetableList: [],
          dairyList: [],
          meatAndFishList:[],
          dryGoodsList:[],
          householdItemsList:[],
          othersList:[],
        }
      default:
        return state
    }
  
  }

  export default productsReducer;