const initialState = {
    username: '',
    id: 0,
    profile_pic: '',
}

const GET_USER_INFO = 'GET_USER_INFO'

export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_USER_INFO:
            return Object.assign({}, state, {username: action.payload})
                //  id: action.payload.id, profile_pic: action.payload.profile_pic
        default:
            return state;
    }
}

export function getUserInfo(info){
    return {
        type: GET_USER_INFO,
        payload: info
    }
}