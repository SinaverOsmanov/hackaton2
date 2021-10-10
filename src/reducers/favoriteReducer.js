const defaultState = {
    favoriteCount: 0
}

const CHANGE_COUNT_FAVORITE = "CHANGE_COUNT_FAVORITE"

export function favoriteReducer(state=defaultState, action){
    switch (action.type) {
    case CHANGE_COUNT_FAVORITE:            
        return {...state, favoriteCount: action.payload}
    default:
        return state
    }
}

export const favoriteReducerAction = (payload)=> {return {type: CHANGE_COUNT_FAVORITE, payload: payload}}