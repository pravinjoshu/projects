import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';
import { BiLogoYelp } from 'react-icons/bi';

const BodyEight = () => {
  return (
    <div className='row m-5 bg-primary-subtle' style={{height:"auto"}}>
        <div className="col-12 col-md-4 mt-5">
            <p>K.O'Sullivan</p>

        </div>
        <div className="col-12 col-md-4 mt-3">
          <div className='d-flex flex-column'>
            <div className='my-lg-5  my-md-3 '>
              <span className='me-5'>Accessibility Statement</span>
              <span>Privacy Policy</span>
            </div>
            <div className='my-lg-5 my-md-3'>
              <p>124-345-1387</p>
              <p>info@mysite.com</p>
              <p>500 Terry Francine st. San Francisco. CA 94158</p>
            </div>

            <div className='my-4'>
              <span className='badge text-bg-light p-2 rounded-pill me-2'>{<BiLogoYelp/>}</span>
              <span className='badge text-bg-light p-2 rounded-pill me-2'>{<FaLinkedinIn/>}</span>
              <span className='badge text-bg-light p-2 rounded-pill me-2'>{<FaFacebookF/>}</span>
              <p className='my-3'>2035 by K.O'Sullivan Powered and secured by Wix</p>
            </div>
          </div>

        </div>
      
    </div>
  )
}

export default BodyEight
