import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

export default function Protected ({children,authentication=true})  {
    const navigate=useNavigate();
    const [loader,setLoader]=useState(true);
    const authStatus=useSelector(state=>state.auth.status);
    useEffect(()=>{
      //true && false!==true 
      //when authentication is true and authStatus is false then navigate to login page
      //authentication will be true beacause we send the default value as true if authsatatus is false
      //it means user is not logged in so we need to navigate to login page
        if( authentication && authStatus!==authentication){
            navigate("/login");
        }
        else if(!authentication && authStatus===authentication){
           navigate("/");
        }
        setLoader(false);
    },[authStatus,navigate,authentication]);
  return loader ? <h1>loading...</h1> : <>{children}</>
}


