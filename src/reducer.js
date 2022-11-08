import * as actions from './actionType';

//setup reducer

const initialState = {
    data: [],
    posts: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            console.log(action.payload)
            return {...state, posts: action.payload}
        default:
            return state;
    }
}

export default reducer;