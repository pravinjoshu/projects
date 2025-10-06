import React from 'react';
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaBell, FaSignOutAlt } from 'react-icons/fa';

import './com.css'
import { useNavigate } from 'react-router';

const Header = () => {
    const navigate = useNavigate()

    const navi = ()=>{
        navigate('/')
    }
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <div>
        <h4>Good Morning, <span className="text-danger">Lakshmi</span></h4>
        <strong>(Admin)</strong>
      </div>
      <div className='d-flex align-items-center'>
        <strong className='me-1'>Chapter:</strong>
        <select className="form-select" style={{width:"250px"}} >
          <option value="all"> All</option>
          <option value="bni-agaram">BNI Agaram</option>
        </select>
        <div className="icon-button position-relative  mx-3">
        <FaBell size={20} />
        <span className="badge bg-danger position-absolute top-0 start-100 translate-middle rounded-pill">
          2
        </span>
      </div>

      {/* Logout Icon Button */}
      <div className="icon-button me-2" onClick={navi}>
        <FaSignOutAlt size={20} color="red" />
      </div>
      </div>
    </div>
  );
};

export default Header;
