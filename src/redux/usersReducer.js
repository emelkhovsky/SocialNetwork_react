const ADD_FRIEND = 'ADD-FRIEND';
const REMOVE_FRIEND = 'REMOVE-FRIEND';
const SET_USERS = 'SET-USERS';
const CHANGE_PAGE = 'CHANGE_PAGE';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const LOADING = 'LOADING';

let users = []

let initialState = {
    users,
    pageSize: 5, 
    usersCount: 0,
    currentPage: 1,
    isLoading: false
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
    else if(action.type === LOADING){
        return{
            ...state,
            isLoading:action.isLoading
        };
    }
    return state;
}

export const add_user = (id) => {
    return{
        type: ADD_FRIEND,
        id
    };
};

export const remove_user = (id) =>{
    return {
        type: REMOVE_FRIEND,
        id
    }
};

export const set_users = (users) =>{
    return{
        type: SET_USERS,
        users
    }
}

export const change_page = (pageNumber) =>{
    return{
        type: CHANGE_PAGE,
        pageNumber
    }
}

export const set_users_count = (count) =>{
    return{
        type: SET_USERS_COUNT,
        count
    }
}

export const is_loading = (isLoading) =>{
    return{
        type: LOADING,
        isLoading
    }
}