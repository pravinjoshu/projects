import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="d-flex justify-content-center mt-3">
    
       {/* Youtube searchBar */}

      <div className="d-flex w-50">
        
        <input type="text" placeholder="Search" className="form-control ps-3  rounded-start-pill" style={{ borderRadius: "0", boxShadow: "none" }}/>

        <button className="btn btn-light border px-3  text-center rounded-end-pill" style={{ borderRadius: "0" }}>
           <CiSearch className="mb-1 fs-5" />
        </button>

      </div>


    </div>
  );
};

export default SearchBar;
 