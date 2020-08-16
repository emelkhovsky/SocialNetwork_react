const ADD_FRIEND = 'ADD-FRIEND';
const REMOVE_FRIEND = 'REMOVE-FRIEND';
const SET_USERS = 'SET-USERS';
const CHANGE_PAGE = 'CHANGE_PAGE';
const SET_USERS_COUNT = 'SET_USERS_COUNT';

let users = []

let initialState = {
    users,
    pageSize: 5, 
    usersCount: 0,
    currentPage: 1
}

export const usersReducer = (state=initialState, action) =>{
    if (action.type === ADD_FRIEND){
        return {
            ...state,
            users: state.users.map(el => {
                if (el.id === action.id){
                    return {
                        ...el,
                        followed: true
                    };
                }
                return el;
            })
        }
    }
    else if(action.type === REMOVE_FRIEND){
        return {
            ...state,
            users: state.users.map(el => {
                if(el.id === action.id){
                    return {
                        ...el,
                        followed: false
                    };
                }
                return el;
            })
        }
    }
    else if(action.type === SET_USERS){
        return{
            ...state,
            users: [...action.users]
        };
    }
    else if(action.type === CHANGE_PAGE){
        return{
            ...state,
            currentPage:action.pageNumber
        };
    }
    else if(action.type === SET_USERS_COUNT){
        let count = action.count;
        if (count > 50){
            count = 50;
        }
        return{
            ...state,
            usersCount:count
        };
    }
    return state;
}

export const addAC = (id) => {
    return{
        type: ADD_FRIEND,
        id
    };
};

export const removeAC = (id) =>{
    return {
        type: REMOVE_FRIEND,
        id
    }
};

export const setUsersAC = (users) =>{
    return{
        type: SET_USERS,
        users
    }
}

export const changePageAC = (pageNumber) =>{
    return{
        type: CHANGE_PAGE,
        pageNumber
    }
}

export const setUsersCountAC = (count) =>{
    return{
        type: SET_USERS_COUNT,
        count
    }
}