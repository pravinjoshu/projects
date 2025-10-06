import React from 'react'
import './pages.css'

const BodyOne = () => {
  return (
    <div className='height bg-dark text-light px-4'>
       <div className='d-flex justify-content-center align-items-center h-100 z-3' >
          <div className='w-50 w-sm text-center'>
            <h1 className='mb-5 title-h animate__animated animate__fadeInDown animate__slower animate__infinite'>Crafting Excellence</h1>
            <div className='animate__animated animate__fadeInUp animate__slower animate__infinite'>
            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero cupiditate, asperiores rem officia quis maiores velit aspernatur natus molestias magni totam, accusamus minima vel quibusdam praesentium a delectus excepturi neque?</p>
            <button className='btn btn-light px-5'>Contact</button>
            </div>
           </div>
       </div>
    </div>
  )
}

export default BodyOne
