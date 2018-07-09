import { SET_SEARCH_TERM } from "./actions.js";

const DEFAULT_STATE = {
    searchTerm: 'redux'
}

const setSearchTerm = (state, action) => {
    console.log(action.payload)
    return Object.assign({}, state, {searchTerm: action.payload})
}

const rootReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_SEARCH_TERM:
        return setSearchTerm(state, action)
        default:
        return state
    }
}

export default rootReducer