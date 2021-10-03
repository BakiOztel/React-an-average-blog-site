const userx ={
    data:null,
    error:null,
    Auth:false
}

export default (user=userx, action) => {
    switch (action.type) {
        case "LOGİN":
            return { ...user,Auth:true,error:null, data: action.payload }
        case "IS_LOGGED_IN_SUCCESS":
            return {...user,Auth:true,data:action.payload,error:null}
        case "LOGİN_ERROR":
            return {...user,Auth:false,data:null,error:"Login failed"}
        case "IS_LOGGDED_IN_ERROR":
            return {...user,Auth:false,data:null,error:"Token missing or invalid."}
        case "LOGOUT":
            return {data:null,error:null,Auth:false};
        default:
            return user;
    }
}