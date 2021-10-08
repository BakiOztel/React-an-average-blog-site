import * as api from "../../Api/postApi.js";


export const FetchAllPost=() =>async (dispatch)=>{
      try{
          const data = await api.getAllPost();
          if(data.data){
              dispatch({type:"FETCH_ALL",payload:data.data});
          }else{
              console.log("değer yok");
          }
      }catch(error){

          dispatch({type:"LOGOUT"});
          
          console.log(error.message);
      }
}

export const FetchAllProfilePost=() =>async (dispatch)=>{

    dispatch({type:"PROFILE_FETCH_LOADING"});
    try{
        const data = await api.getProfilePost();
        if(data.data){
            dispatch({type:"PROFILE_FETCH",payload:data.data});
        }else{
            console.log("değer yok");
        }
    }catch(error){

        dispatch({type:"LOGOUT"});
        
        console.log(error.message);
    }
}


export const createPost=(value)=> async (dispatch) =>{
    try{
        const {data}= await api.createPost(value);
        if(data){
            dispatch({type:"CREATE",payload:data});
        }else{
            console.log("değer gelmedl");
        }
    }catch(error){
        console.log(error.message);
    }
}
