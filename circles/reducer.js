const initialState = [
    {
        radius: 50,
        color: "#FF00FF"
    },
    {
        radius: 30,
        color: "#FF99AA"
    },
    {
        radius: 60,
        color: "#0000FF"
    },
    {
        radius: 10,
        color: "#000000"
    },
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;
    //ADD_RANDOM_CIRCLE
    if (type === 'ADD_RANDOM_CIRCLE'){
        let newState = [
            ...state,
            {
                radius: Math.floor(Math.random()*200) + 1,
                color: `#${Math.floor(Math.random()*16777215).toString(16)}`
            }
        ]
        //update state with a newly generated circle

        return newState;
    }
    // ACTION: Add a random circle

    return state;
}