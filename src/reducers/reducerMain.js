
export default function (state, action) {
    switch (action.type) {
        case 'SET_WIDTH':
            return {
                ...state,  
                x: +action.data
            };
        case 'SET_HEIGHT':
            return {
                ...state,  
                y: +action.data
            };
        case 'SET_TYPE':
            return {
                ...state,  
                type: +action.data
            };
        default:
            return state
    }
  }