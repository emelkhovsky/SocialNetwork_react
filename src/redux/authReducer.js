const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId:null, 
    email:null,
    login:null,
    isAuth:false
}

export const authReducer = (state=initialState, action) =>{
    if (action.type === SET_USER_DATA){
        alert('hello2');
        return {
            ...state,
            ...action.data,
            isAuth:true
        }
    }
    return state;
}

export const set_user_data = (userId, login, email) =>{
    return{
        type: SET_USER_DATA,
        data: {userId, login, email}
    }
}