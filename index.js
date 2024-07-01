const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;

const ORDER_CAKE = 'ORDER_CAKE';
const RESTOCK_CAKE = 'RESTOCK_CAKE';

const ORDER_ICECREAM = 'ORDER_ICECREAM';
const RESTOCK_ICECREAM = 'RESTOCK_ICECREAM';

const orderCake = (qty = 1) => {
  return {
    type: ORDER_CAKE,
    payload: qty
  }    
}

// An action is an object with a type property
// An action creator is a function that returns an action object:
const restockCake = (qty = 1) => {
  return {
    type: RESTOCK_CAKE,
    payload: qty
  }
}


const orderIceCream = (qty = 1) => {
  return {
    type: ORDER_ICECREAM,
    payload: qty
  }
}

const restockIceCream = (qty = 1) => {
  return {
    type: RESTOCK_ICECREAM,
    payload: qty
  }
}

// A reducer is a function that accepts current state and an action object,
// and returns the new state:
const initialState = {
  numCakes: 10,
  numIceCreams: 20
}

const reducer = (state = initialState, action) => {
  if (action.type === ORDER_CAKE){
    return {
      ...state, 
      numCakes: state.numCakes - action.payload
    }
  } else if (action.type === RESTOCK_CAKE) {
    return {
      ...state,
      numCakes: state.numCakes + action.payload
    }
  } else if (action.type === ORDER_ICECREAM) {
    return {
      ...state,
      numIceCreams: state.numIceCreams - action.payload
    }
  } else if (action.type === RESTOCK_ICECREAM) {
    return {
      ...state,
      numIceCreams: state.numIceCreams + action.payload
    }
  }
  return state;
}

// The store is where all global application state is stored.
// createStore accepts the reducer function as an argument.
// It exposes a method called getState() which gets the current state.
const store = createStore(reducer);

// Logs the initial state to console, because we haven't yet updated it
console.log('Initial state: ', store.getState());

// The subscribe() method accepts a callback function
// that is called whenever state changes.
const unsubscribe = store.subscribe(() => console.log("Updated state:", JSON.stringify(store.getState())));

// The store allows state to be updated via dispatch(), which
// accepts an action or action creator as an argument.
// Calling the action creator returns the action.
  // store.dispatch(orderCake());
  // store.dispatch(orderCake());
  // store.dispatch(orderCake());

  // The app can unsubscribe from the Redux store by calling the function
  // that was returned by the subscribe method.

  // store.dispatch(restockCake(100));
  // store.dispatch(freezeCake(true));

// Bind action creator functions to dispatch()
const actions = bindActionCreators({orderCake, restockCake, orderIceCream, restockIceCream}, store.dispatch);

actions.orderCake(3);
actions.restockCake(12);

actions.orderIceCream(3);
actions.restockIceCream(5);

unsubscribe();