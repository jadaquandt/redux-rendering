const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

const card1 = document.getElementById('card1Button');
card1.addEventListener('click', e => dispatch({type: "CHANGE_CARD", card: 1}));

const card2 = document.getElementById('card2Button');
card2.addEventListener('click', e => dispatch({type: "CHANGE_CARD", card: 2}));