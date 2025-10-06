import React from 'react'


const WebsiteHearder = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary-subtle px-4 py-3">
        <div className="container-fluid">
            <div className='navbar-brand nav-w '>
                 <span className='text-warning'>K.O </span><span>Sullivan</span>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas w-o offcanvas-end" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">  
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className='d-flex flex-lg-row flex-md-column flex-xs gap-3  justify-content-between '>
                  <div className='d-flex flex-lg-row flex-md-column flex-xs gap-3' >
                      <span className='ms-3'>Service</span>
                      <span className='ms-3'>About</span>
                      <span className='ms-3'>Contact</span>
                  </div>
                  <div className='ms-md-3' >
                      <p className='text-decoration-underline ms-2 mb-0'>call Us Anytime : 887965452</p>
                  </div>         
              </div>
            </div>
            
        </div>
    </nav>
    </div>
  )
}

export default WebsiteHearder
