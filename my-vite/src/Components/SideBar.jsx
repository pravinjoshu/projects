import React, { useState } from "react";
import { MdHome } from "react-icons/md";            // Members → Home icon okay
import { FaFileExcel } from "react-icons/fa";       // Import Excel → Excel file icon
import { FaUserPlus } from "react-icons/fa";        // Add Member → User + icon
import { IoNotificationsOutline, IoReorderThreeOutline } from "react-icons/io5"; // Notification → Bell icon
import { FiSettings } from "react-icons/fi";        // Setting → Gear icon
import './com.css'

const SideBar = () => {
  const [open, setOpen] = useState(true);

  const toggleSidebar = () => setOpen(!open);

  const menuItems = [
  { icon: <MdHome className="fs-4" />, label: "Member" },
  { icon: <FaFileExcel className="fs-4" />, label: "Import Excel" },
  { icon: <FaUserPlus className="fs-4" />, label: "Add Member" },
  { divider: true },
  { icon: <IoNotificationsOutline className="fs-4" />, label: "Notification" },
  { icon: <FiSettings className="fs-4" />, label: "Setting" },
];


  return (
    <div className="d-flex text-white me-3">
      {/* Sidebar */}
      <div
        className="bg-danger text-white border-end shadow-sm"
        style={{
            color:"white",
          width: open ? "220px" : "70px",
          transition: "width 0.3s ease",
          minHeight: "100vh",
        }}
      >
        {/* Toggle Button */}
        <div className="p-3 border-bottom" style={{color:"white"}}>
          <button className="btn ms" onClick={toggleSidebar} style={{color:"white"}}>
            <IoReorderThreeOutline className="fs-4 " />
          </button>
        </div>

        {/* Menu */}
        <div className="d-flex flex-column p-2">
          {menuItems.map((item, index) =>
            item.divider ? (
              <hr key={index} />
            ) : (
              <button
                key={index}
                className="btn d-flex align-items-center text-start mb-2" style={{color:"white"}}
              >
                {item.icon}
                {open && <span className="ms-3">{item.label}</span>}
              </button>
            )
          )}
        </div>
      </div>

      {/* Main Content */}
      
    </div>
  );
};

export default SideBar;
