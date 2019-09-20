import { FETCH_USER_LOGIN, EDIT_USER, LOGOUT, FETCH_USERS, DELETE_USER, ADD_USER } from "../../Store/Actions/Type"

let initialState = {
    users: [],
    userLogin: null
}

const UserReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USER_LOGIN: {
            state.userLogin = action.payload.user;
            return {...state};
        }

        case EDIT_USER: {
            state.userLogin = action.payload.user;
            localStorage.setItem("userLogin", JSON.stringify(state.userLogin));
            return {...state, userLogin: {...state.userLogin}};
        }

        case LOGOUT: {
            state.userLogin = null;
            return {...state, userLogin: null};
        }

        case FETCH_USERS: {
            state.users = action.payload.users
            return {...state, users: [...state.users]};
        }

        case DELETE_USER: {
            const userIndex = state.users.findIndex(user => user.taiKhoan === action.payload.user.taiKhoan);
            state.users.splice(userIndex, 1);
            return {...state, users: [...state.users]};
        }

        case ADD_USER: {
            state.users.push(action.payload.user);
            return {...state, users: [...state.users]};
        }

        default: return state;
    }
};

export default UserReducer;