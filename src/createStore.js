export default function createStore(reducer){
// your code here!
let state = 0

const getState = () => {
  return state 
}

const subscribe = (listener) => {
  if (typeof listener === 'function')
  {listener()}
}

const dispatch = (action) => {
   state = reducer(state, action)
}

return {getState: getState, dispatch: dispatch, subscribe: subscribe}


}

// store = createStore(reducer)
// store.getState()