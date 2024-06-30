// An action is an object with a type property
// An action creator is a function that returns an action object:
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