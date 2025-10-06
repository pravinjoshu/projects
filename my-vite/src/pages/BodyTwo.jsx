import React from 'react'
import { BsFillHexagonFill } from 'react-icons/bs';
import './pages.css'

const BodyTwo = () => {
  return (
    <div className='m-5'>
      <h1>Our Expertise</h1>
      <p>Licensed & Insured</p>

      <div className='row' >
        <div className='col-12 col-md-4 mt'>
            <div className="card p-3 bg-primary-subtle">
               <div className="body-card">
                 <i className='icon ms-2 mb-3'><BsFillHexagonFill/></i>
                <h3 className='mb-3'>Customized Builds</h3>
                <p className='mb-4'>Crafting unique spaces wigth attention to detail.</p>
               </div>
            </div>
        </div>
        <div className='col-12 col-md-4 mt' >
            <div className="card p-3 bg-primary-subtle">
               <div className="body-card">
                 <i className='icon ms-2 mb-3'><BsFillHexagonFill/></i>
                <h3 className='mb-3'>Customized Builds</h3>
                <p className='mb-4'>Crafting unique spaces wigth attention to detail.</p>
               </div>
            </div>
        </div>
        <div className='col-12 col-md-4 mt'>
            <div className="card p-3 bg-primary-subtle">
               <div className="body-card">
                 <i className='icon ms-2 mb-3'><BsFillHexagonFill/></i>
                <h3 className='mb-3'>Customized Builds</h3>
                <p className='mb-4'>Crafting unique spaces wigth attention to detail.</p>
               </div>
            </div>
        </div> 
      </div>
      <div className='row mt-3'>
        <div className='col-12 col-md-6 mt'>
            <div className="card p-3 bg-primary-subtle">
               <div className="body-card">
                 <i className='icon ms-2 mb-3'><BsFillHexagonFill/></i>
                <h3 className='mb-3'>Customized Builds</h3>
                <p className='mb-4'>Crafting unique spaces wigth attention to detail.</p>
               </div>
            </div>
        </div>
        <div className='col-12 col-md-6 mt'>
            <div className="card p-3 bg-primary-subtle">
               <div className="body-card">
                 <i className='icon ms-2 mb-3'><BsFillHexagonFill/></i>
                <h3 className='mb-3'>Customized Builds</h3>
                <p className='mb-4'>Crafting unique spaces wigth attention to detail.</p>
               </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default BodyTwo
