
 export default function(state, action) {
    switch (action.type) {
        case 'SET_IMAGE':
            return {
            ...state,  
            image: action.image,
            };
        case 'DEL_SCROLL_IMAGE':
            return {
                ...state,
                image: action.image,  
                scroll: action.scroll,
            };
        case 'SET_HEIGHT':
            return {
                ...state,  
                contentHeight: action.height,
            };
        case 'UPDATE':
            return {
                ...state,
                image: action.image,  
                scroll: action.scroll,
                contentHeight: action.height,
            };
        default:
            return state
    }
  }