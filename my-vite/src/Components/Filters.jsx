


import React from 'react';
import SideBar from './SideBar';
import AddMemberForm from './AddMemberForm';
import Headers from "./Headers";

const Filters = () => {
  return (
    <div className='container-fluid d-flex mt-4'>
        <SideBar/>
        <div className="flex-1 p-6">
            <hr />
        <Headers/> 
        <hr />
        <AddMemberForm/>
        </div>
        
    </div>
  );
};

export default Filters;
