import React from 'react'
import TodoBox from './TodoBox'

const HomePage = () => {
  return (
    <div className='h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% overflow-auto'>
        <TodoBox/>
    </div>
  )
}

export default HomePage