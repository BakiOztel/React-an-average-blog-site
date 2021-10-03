import * as api from "../../Api/formApi.js";


export const login = (value) => async (dispatch) => {
    try {
        const { data } = await api.login(value);
        console.log(data.user);
        dispatch({ type: "LOGİN", payload: data.user });
    } catch (error) {
        dispatch({ type: "LOGİN_ERROR" });
    }
}

export const isLogin = () => async (dispatch) => {
    try {
        const { data } = await api.isLogin();
        dispatch({ type: "IS_LOGGED_IN_SUCCESS", payload: data.user });
    } catch (error) {
         console.log(error);
         dispatch({type:"IS_LOGGDED_IN_ERROR"});
    }
}

export const logoutAction = () => async (dispatch) => {
    try{
        await api.Logout();
        dispatch({ type: "LOGOUT" });
    }catch(error){
        console.log(error);
    }
}