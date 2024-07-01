// Using Immer.js to update state without mutating it
const redux = require('redux');
const bindActionCreators = redux.bindActionCreators;
const produce = require('immer').produce;

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
    // return {
    //   ...state,
    //   address: {
    //     ...state.address,
    //     street: action.payload
    //   }
    // }

    // Instead, we can use immer.produce() to handle this messy reduction 
    // for us under the hood (without mutating the current state):
    return produce(state, (draft) => {
      draft.address.street = action.payload;
    });
  }
  return state;
}

const store = redux.createStore(reducer);
console.log(`Initial State: ${JSON.stringify(store.getState())}`);

const unsubscribe = store.subscribe(() => {
  console.log(`Updated State: ${JSON.stringify(store.getState())}`)
});

const streetActions = bindActionCreators({ updateStreet }, store.dispatch);
streetActions.updateStreet('1932 181st Street SE')

unsubscribe();

