import React from 'react'
import {container ,Logo,LogoutBtn} from '../index'
import {Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const authStatus=useSelector((state)=>state.auth.atatus)
  const navigate=useNavigate()
  const navItems=[
    {
      name:'Home',
      slug:"/",
      active:true
    },
    {
      name:'Login',
      slug:"/login",
      active:!authStatus,
    },
    {
      name:'Signup',
      slug:'/signup',
      active:!authStatus,
    },
    {
      name:'All Posts',
      slug:'/all-post',
      active:authStatus

    },
    {
      name:'Add Posts',
      slug:'/add-post',
      active:authStatus

    },
  ]
  return (
    <header className='py-3 shadow bg-gray-500'>
     <container>
      <nav className='flex'>
        <div className='mr-4'>
          <Link to='/'>
            <Logo width='70px'/>
          </Link>

        </div>
        <div>
          <ul className='flex'>
            {navItems.map((item)=>
              
          item.active ?
          (
            <li key={item.name}>
                <button
                onClick={()=>navigate(item.slug)}
                className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
                  
                  {item.name}
                </button>
            </li>

          ):null
          )}
          {authStatus &&(<li>
            <LogoutBtn/>
            </li>
            )} {/*if auth status true then only it will be displayed */}
          </ul>
        </div>
      </nav>
     </container>
    </header>
  )
}

export default Header
