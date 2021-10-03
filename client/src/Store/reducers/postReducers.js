const postAction={
    post:[],
    isLoading:false
}


export default (post = postAction, action) => {
    switch (action.type) {
        case "CREATE":
            return {post:[...post,action.payload],isLoading:true}
        case "FETCH_ALL":
            
            return {post:action.payload,isLoading:true}
        case "PROFILE_FETCH_LOADING":
            return {post:[],isLoading:false}
        case "PROFILE_FETCH":
            return {post:action.payload,isLoading:true}
        default:
            return post;
    }
}