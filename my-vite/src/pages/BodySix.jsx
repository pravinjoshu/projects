import React from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

const BodySix = () => {
  return (
    <div className='m-5  '>
        <div className='row'>
            <div className="col-12 col-lg-2 col-md-3">
                <div>
                    <div className='d-flex justify-content-between'>
                        <h3>Why</h3>
                        <h3 className='text-secondary'><FaRegArrowAltCircleRight/></h3>
                    </div>
                    <h3>Choose Us?</h3>
                </div>
            </div>
            <div className='col-12 ms'>
                <div className='animate__animated animate__fadeInDown animate__slower animate__infinite'>
                    <p>Excelling in crafting exceptional spaces.</p>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-4 col-md-12">
                
            </div>
            <div className="col-lg-4 col-md-6">
                <div className='bg-img-1'>
                    <div className='red-card p-3 animate__animated animate__slideInLeft animate__slower animate__infinite'>
                        <h3>Quality</h3>
                        <h3 className='mb-3'>Craftsmanship</h3>
                         <p className='mb-0'>Providing transparent and</p>
                         <p>fair pricing</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt">
                <div className='bg-img-2'>
                    <div className='red-card p-3 animate__animated animate__slideInLeft animate__slower animate__infinite'>
                        <h3>Quality</h3>
                        <h3 className='mb-3'>Craftsmanship</h3>
                         <p className='mb-0'>Providing transparent and</p>
                         <p>fair pricing</p>
                    </div>

                </div>
            </div>
        </div>

        <div className="row mt-2">
            <div className="col-lg-4 col-md-6 mt">
                <div className='bg-img-3'>
                    <div className='red-card p-3 animate__animated animate__slideInLeft animate__slower animate__infinite'>
                        <h3>Quality</h3>
                        <h3 className='mb-3'>Craftsmanship</h3>
                         <p className='mb-0'>Providing transparent and</p>
                         <p>fair pricing</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt">
                <div className='bg-img-4'>
                    <div className='red-card p-3 animate__animated animate__slideInLeft animate__slower animate__infinite'>
                        <h3>Quality</h3>
                        <h3 className='mb-3'>Craftsmanship</h3>
                         <p className='mb-0'>Providing transparent and</p>
                         <p>fair pricing</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default BodySix
