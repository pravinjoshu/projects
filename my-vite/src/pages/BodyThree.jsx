import React from 'react'

const BodyThree = () => {
  return (
    <div className='row  m-5'   >
       <div className="col-12 col-lg-9 col-md-7 d-flex justify-content-center align-items-center text-white  bg-danger" style={{height:"450px"}}>
        <div >
            <p>Building Excellence</p>
            <div className='animate__animated animate__fadeInDown animate__slower animate__infinite'>
            <h1 className='title-h'>Serving Clients in </h1>
            <h1 className='title-h mb-5'>the Region</h1>
            </div>
            <button className='btn btn-light px-5 animate__animated animate__fadeInUp animate__slower animate__infinite'>Contact</button>

        </div>
            
       </div>
       <div className="col-lg-3 col-12 col-md-5 mt">
        <div>
         <img src="https://static.wixstatic.com/media/88aac0_f346a487e4854209b55da23ea9ecdbca~mv2.jpeg" className='img-2' alt="" />
        </div>
       </div>
    </div>
  )
}

export default BodyThree
