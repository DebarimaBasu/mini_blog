import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {login as authlogin} from '../store/authSlice'
import{Button,Input,Logo} from './index'
import {useDispatch} from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'

const Login = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {register,handleSubmit}=useForm();
    const [error,setError]=useState("");
    const login=async(data)=>{
        setError("");{/*cleanig error after login */}
        try{
            const sesson=await authService.login(data);
            if (sesson){
                const userData=await authService.getCurrentUser();
                if (userData)
                    dispatch(authlogin({userData}));
                    navigate("/");
            
        }
    }
        catch(error){
            setError(error.message);
        }
    }
}
  return (
    <div>
      
    </div>
  )


export default Login
