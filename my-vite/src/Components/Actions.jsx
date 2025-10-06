import React from 'react';
import './com.css'
import  {Link, useNavigate} from 'react-router-dom'

const Actions = () => {

    
  return (
    <div className='my-3'>
        
    <div className="d-flex flex-wrap justify-content-end gap-2 w-100  mb-3">
      <button className="btn btn-2">Import excel file</button>
      <button className="btn btn-2">Multiple images</button>
     <Link to={'/add'} >  
      <button className="btn btn-danger">+ Add</button>
     </Link>
      
      <button className="btn btn-2">+ Regional team</button>
    </div>

    <div className="d-flex flex-wrap gap-3 mb-4">
      <div className="stat-card">
        <span className="label">Total</span>
        <span className="value">175</span>
      </div>
      <div className="stat-card">
        <span className="label">Active</span>
        <span className="value">175</span>
      </div>
      <div className="stat-card">
        <span className="label me-2">Renewal overdue</span>
        <span className="value">89</span>
      </div>
    </div>
    <div className='row'>
        <div className="col text-end">

        <button className="btn btn-2  px-5">Filter</button>
        </div>
    </div>
    </div>
  );
};

export default Actions;
