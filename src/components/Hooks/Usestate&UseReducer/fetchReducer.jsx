import React, { useReducer,useEffect } from 'react'
import axios from 'axios'

const initialState = {
    loading : true,
    post : {},
    error : ''
}

const reduce = (state,action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading:false,
                post : action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return{
                loading:false,
                post:{},
                error:"Something Went Wrong"
            }
        default:
            return state
    }
}

function FetchReducer() {
    const [state,dispatch] = useReducer(reduce,initialState)
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1").then(response=>{
            dispatch({type:'FETCH_SUCCESS',payload:response.data})
        }).catch(err=>{
            dispatch({type:'FETCH_ERROR'})
        })
    },[])
  return (
    <div>
     {state.loading ? "Loading" : state.post.title} 
      {state.error ? "error" : null}
    </div>
  )
}

export default FetchReducer
