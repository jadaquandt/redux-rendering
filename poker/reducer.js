const initialState = [
    {
        value: "K",
        suit: "C"
    },
    {
        value: "K",
        suit: "D"
    }
];

//Function to pick the card value
function pickValue(){
    let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "Q", "K"];
    return values[Math.floor(Math.random() * values.length)]
}

//Function to pick the card suit
function pickSuit(){
    let suits = ["C", "D", "H", "S"];
    return suits[Math.floor(Math.random() * suits.length)]
}

//Ran into some issues getting the cards to render correctly, but Google to the rescue
//Using .slice returns a new array with only the selected elements so the function is pure
//Defining the card was helpful to make sure each button only changed the correct card
//Before I had the "card" variable, both of the cards would be repopulated when the button was clicked
const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type, card } = action;
    // ACTION - Change either card to a random new one (Try implementing one action that both buttons dispatch)
    if (type === 'CHANGE_CARD' && card === 1){
        let newState = [
            {
                value: `${pickValue()}`,
                suit: `${pickSuit()}`
            },
            ...state.slice(1)
        ]
        //Return new array
        return newState
    }
    else if (card === 2){
        let newerState = [
            ...state.slice(0, 1),
            {
                value: `${pickValue()}`,
                suit: `${pickSuit()}`
            }
        ]
        //Return new array
        return newerState
    }
    return state;
}