const initialState = {
    width: 100,
    height: 200,
    color: "#FF00FF"
};

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    // ACTION 1 - Increment height by 10
    if(type === 'CHANGE_HEIGHT'){
        const height = action.height;
        
        let newState = {
            ...state,
            height: state.height + height
        }
        return newState
    }
    // ACTION 2 - Increment width by 10
    if(type === 'CHANGE_WIDTH'){
        const width = action.width;
        
        let newState = {
            ...state,
            width: state.width + width
        }
        return newState
    }

    // ACTION 3 - Change the color
    if(type === 'CHANGE_RED'){
        const color = action.color;
        
        let newState = {
            ...state,
            color: color
        }
        return newState
    }

    if(type === 'CHANGE_BLUE'){
        const color = action.color;
        
        let newState = {
            ...state,
            color: color
        }
        return newState
    }
    
    return state;
}