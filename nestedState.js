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

// Using just Redux, we would update nested state by using
// the spread operator & providing the updated state.
// This can quickly become difficult to read and maintain, so we
// use immer.produce() to do this for us under the hood without mutating
// the current state:
