import React from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa';


const BodyFour = () => {
  return (
    <div className='m-5'>
        <div className='row'>
            <div className="col-12 col-md-2">
                <div>
                    <div className='d-flex justify-content-between'>
                        <h3>Our</h3>
                        <h3 className='text-secondary'><FaRegArrowAltCircleRight/></h3>
                    </div>
                    <h3>Craftsmanship</h3>
                </div>
            </div>
            <div className='col-12  ms'>
                <div className='animate__animated animate__fadeInDown animate__slower animate__infinite'>
                    <h3 className='mb-3 mt-1'>Where we Excel</h3>
                    <p>Excelling in crafting exceptional spaces.</p>
                </div>

            </div>
        </div>

        <div className='row mt-5' >
                <div className='col-12 col-md-4 mt'>
                    <div className="card p-4 bg-primary-subtle">
                       <div className="body-card">
                        <h3>New</h3>
                        <h3 className='mb-3'>Construction</h3>
                        <p className='mb-4'>Crafting unique spaces wigth attention to detail.</p>
                       </div>
                    </div>
                </div>
                <div className='col-12 col-md-4 mt' >
                    <div className="card p-4 bg-primary-subtle">
                       <div className="body-card">
                        <h3 >Quality</h3>
                        <h3 className='mb-3'>Renovations</h3>
                        <p className='mb-4'>Crafting unique spaces wigth attention to detail.</p>
                       </div>
                    </div>
                </div>
                <div className='col-12 col-md-4 mt'>
                    <div className="card p-4 bg-primary-subtle">
                       <div className="body-card">
                        <h3>Attention</h3>
                        <h3 className='mb-3'>to Detail</h3>
                        <p className='mb-4'>Crafting unique spaces wigth attention to detail.</p>
                       </div>
                    </div>
                </div> 
              </div>
      
    </div>
  )
}

export default BodyFour
