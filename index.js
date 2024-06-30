// An action is an object with a type property
// An action creator is a function that returns an action object:
const redux = require('redux');
const createStore = redux.createStore;
const CAKE_ORDERED = 'CAKE_ORDERED';

const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    quantity: 1
  }    
}

// A reducer is a function that accepts current state and an action object,
// and returns the new state:
const initialState = {
  numCakes: 10,
  isFrozen: false
}

const reducer = (state = initialState, action) => {
  if (action.type === 'CAKE_ORDERED'){
    return {
      ...state, 
      numCakes: state.numCakes--
    }
  }
  return state;
}


// It exposes a method called getState(),
// allows state to be updated via dispatch(action), and
// registers event listeners via subscribe() that
// is called whenever state changes.
// You can also unsubscribe from the store by calling the function
// that was returned by the subscribe method.

// The store is where all global application state is stored.
// createStore accepts the reducer function as an argument.
const store = createStore(reducer)