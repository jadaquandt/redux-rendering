const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

//Sets up your render function to track any changes to your state
subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 
const addRandomCircle = function () {
    console.log('adding random circle');
    dispatch({type: 'ADD_RANDOM_CIRCLE'})
}
