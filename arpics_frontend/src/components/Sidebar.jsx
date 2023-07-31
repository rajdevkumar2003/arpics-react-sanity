import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io';
//import logo from '../assets/logo.png';
import arpics from '../assets/arpics.jpg'
import { categories } from '../utils/data';

const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize';
const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black  transition-all duration-200 ease-in-out capitalize';


const Sidebar = ({user,closeToggle}) => {

  const handleCloseSidebar=()=>{
    if(closeToggle)closeToggle(false);
  }
  return (
    <div className='flex flex-col justify-between h-ful bg-white overflow-y-scroll min-w-210 hide-scrollbar'>
      <div className='flex flex-col'>
        <Link
          to='/'
          className='flex px-5 gap-2 my-6 pt-1 w-190 items-center justify-center flex'       
          onClick={handleCloseSidebar} 
        >
           <img src={arpics} alt='logo' className='w-full h-20' />
           <h2 className='items-center text-lg font-bold text-xl font-serif'>Arpics</h2>
        </Link>
        <div className='flex flex-col gap-5'>
          <NavLink
            to='/'
            onClick={handleCloseSidebar} 
            className={({isActive})=>isActive?isActiveStyle:isNotActiveStyle}
          >
           <RiHomeFill/>
           Home
          </NavLink>

          <h3 className='mt-2 px-5 text-base 2xl:text-xl'>Discover Categories</h3>
        </div>

        <div className='flex flex-col  mr-5 gap-5 mt-2 px-5'>
        {
         
          categories.slice(0,categories.length-1).map((categories)=>
           

            <NavLink
            styles={{justifySelf: 'start'}}
            key={categories.name}
            onClick={handleCloseSidebar} 
            to={`/category/${categories.name}`}
            className={({isActive})=>isActive?isActiveStyle:isNotActiveStyle}
          >
        <img src={categories.image} alt='logo' className='w-16 h-16 items-center rounded-full' />
           <div>
           {categories.name}
           </div>
          </NavLink>

          )
        }

        </div>
      </div>
      {
        user&&(
          
          <Link 
          to={`/user-profile/${user._id}`}
          onClick={handleCloseSidebar} 
          className='mt-20 flex items-center justify-center px-4 py-4 cursor-pointer bg-red-300 hover:bg-sky-300  '>
          <img src={user?.image} className='w-8 rounded-full'/>
          <h1 className='ml-2 font-bold uppercase' >{user.userName}</h1>
           
          </Link>
        )
      }
      <div className="text-l font-medium text-gray-900 dark:text-white p-2 ">
       <h2 className='text-purple-800 font-bold' ><span className='text-red-600'>ARPICS</span> by RAJEEV SINGH</h2>
      </div>
    </div>
  )
}

export default Sidebar
