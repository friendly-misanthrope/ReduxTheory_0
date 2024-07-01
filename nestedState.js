// Using Immer.js to update state without mutating it
const redux = require('redux');
const produce = require('immer').produce();

// define initial state
const initialState = {
  name: 'Nick',
  address: {
    street: '1929 181st Street SE',
    city: 'Bothell',
    state: 'WA'
  }
}

const STREET_UPDATED = 'STREET_UPDATED';

const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street
  }
}

// Using just Redux, we would update nested state by using
// the spread operator & providing the updated state.
// This can quickly become difficult to read and maintain:
const reducer = (state = initialState, action) => {
  if (action.type === STREET_UPDATED) {
    return {
      ...state,
      address: {
        ...state.address,
        street: action.payload
      }
    }
  }
  return state
}