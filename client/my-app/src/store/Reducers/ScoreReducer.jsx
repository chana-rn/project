
const initialValue={
    score:0
}

const reducer = (state = initialValue, action) => {
    switch (action.type) {
        case "add":
            return {
                ...state,
                score:state.score+action.payload
            }
        case "minus":
         return{
            ...state,
            score:state.score-action.payload
         }   
        case "restart":
            return{
                ...state,
                score:0  
            }

        default:
            return state
    }
}

export default reducer