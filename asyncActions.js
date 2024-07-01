const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  loading: false,
  users: [],
  error:''
}

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

const fetchUsersRequested = () => {
  return {
    type: FETCH_USERS_REQUESTED
  }
}

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

const fetchUsersFailed = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error
  }
}

const reducer = (state = initialState, action) => {
  if (action.type === FETCH_USERS_REQUESTED) {
    return {
      ...state,
      loading: true
    }
  } else if (action.type === FETCH_USERS_SUCCESS) {
    return {
      ...state,
      loading: false,
      users: action.payload,
      error: ''
    }
  } else if (action.type === FETCH_USERS_FAILED) {
    return {
      ...state,
      loading: false,
      users: [],
      error: action.payload
    }
  }
  return state;
}

const store = createStore(reducer);