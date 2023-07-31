import React from 'react'
import { Circles } from 'react-loader-spinner'


const Spinner = ({message}) => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <Circles
        type='Circles'
        color='#00BFFF'
        height={50}
        width={200}
        className='m-5'
      />
      <div className='mt-5 text-4xl capitalize' >{message}</div>
    </div>
  )
}

export default Spinner
