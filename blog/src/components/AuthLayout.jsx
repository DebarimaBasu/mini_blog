import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

export default function AuthLayout  ({children,authentication=true})  {
    const navigate=useNavigate();
    const [loader,setLoader]=useState(true);
    const authStatus=useSelector(state=>state.auth.status);
    useEffect(()=>{
        if(authStatus!==authentication){
            navigate("/");
        }
        else if(authStatus==="failed"){
            setLoader(false);
        }
    },[authStatus,navigate,authentication]);
  return (
    <div>
      
    </div>
  )
}


