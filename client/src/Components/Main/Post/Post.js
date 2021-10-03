import styled from "styled-components";
import {CSSTransition,TransitionGroup} from "react-transition-group"
import Deneme from "../../Deneme.js";
import { useDispatch, useSelector } from "react-redux";
import { FetchAllPost } from "../../../Store/actions/postActions.js";
import { useEffect } from "react";

const Style=styled.div`
    width:800px;
    .transition-enter{
         opacity:0.01;
         /* transfrom:translate(0,-10px) */
    }
    .transition-enter-active{
     opacity:1;
     /* transfrom:translate(0,0); */
     transition: all 500ms ease-in;
}
`;

const Posts=()=>{
     const value = useSelector(state => state.postReducers);
     const dispatch = useDispatch();
     useEffect(() => {
         dispatch(FetchAllPost());
     }, []);
    
    return(
         <TransitionGroup component={Style}>
            {value.post.map((post)=>(
                 <CSSTransition timeout={500} classNames="transition">
                    <Deneme key={post.img}  post={post} />
                 </CSSTransition>
            ))}
         </TransitionGroup>
    );
}
export default Posts;