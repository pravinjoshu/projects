// import React from 'react'
// import { IoReorderThreeOutline } from "react-icons/io5";
// import { MdHome } from "react-icons/md";
// import { BsCollectionPlay } from "react-icons/bs";
// import { BsPlayBtn } from "react-icons/bs";
// import { IoIosArrowForward } from "react-icons/io";
// import { LuClock } from "react-icons/lu";
// import { RxCounterClockwiseClock } from "react-icons/rx";
// import { BiLike } from "react-icons/bi";
// import { CgPlayList } from "react-icons/cg";
// import './style.css'

// const SideBar = () => {

//     const hide =()=>{
        
//     }


//   return (
//     <div className='ms-3 mt-3'>
//         <button className='btn' onClick={hide}>
//            <IoReorderThreeOutline className='fs-4'/>
//         </button>
//         <div className='d-flex flex-column gap-3  w-25 ' >
//             <div className='d-flex flex-column w-60'>
//                 <button className='btn text-start '><MdHome className='fs-4 mb-1 me-4' />Home</button>
//                 <button className='btn text-start '><BsPlayBtn className='fs-4 mb-1 me-4' />Shot</button>
//                 <button className='btn text-start '><BsCollectionPlay className='fs-4 mb-1 me-4' />Subcription</button>
//                 <hr />
//                 <button className='btn text-start '>You <IoIosArrowForward className='fs-4 mb-1 me-4' /></button>
//                 <button className='btn text-start '><RxCounterClockwiseClock className='fs-4 mb-1 me-4' />History</button>
//                 <button className='btn text-start '><BsPlayBtn className='fs-4 mb-1 me-4' />Playlist</button>
//                 <button className='btn text-start '><LuClock className='fs-4 mb-1 me-4' />Watch later</button>
//                 <button className='btn text-start '><CgPlayList className='fs-4 mb-1 me-4' />Likes video</button>
//             </div>
//         </div>

//     </div>
//   )
// }

// export default SideBar



import React, { useState } from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { BsCollectionPlay, BsPlayBtn } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { LuClock } from "react-icons/lu";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { CgPlayList } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineMusicalNote } from "react-icons/hi2";
import { BiMoviePlay } from "react-icons/bi";
import { TbLivePhoto } from "react-icons/tb";
import './style.css'

const SideBar = () => {
  const [open, setOpen] = useState(true) // sidebar content show/hide state

  const toggleSidebar = () => {
    setOpen(!open)
  }

  return (
    <div className='ms-3 mt-3'>
      {/* Top Button */}
      <button className='btn' onClick={toggleSidebar}>
        <IoReorderThreeOutline className='fs-4' />
      </button>

      {/* Sidebar Content */}
      {open && (
        <div className='d-flex flex-column gap-3  w-25'>
          <div className='d-flex flex-column  w-60'>
            <button className='btn text-start  '><MdHome className='fs-4 mb-1 me-4' />Home</button>
            <button className='btn text-start '><BsPlayBtn className='fs-4 mb-1 me-4' />Short</button>
            <button className='btn text-start '><BsCollectionPlay className='fs-4 mb-1 me-4' />Subscription</button>
            <hr />
            <button className='btn text-start d-flex  '><h5>You</h5> <IoIosArrowForward className='fs-4 mb-1 me-4' /></button>
            <button className='btn text-start '><RxCounterClockwiseClock className='fs-4 mb-1 me-4' />History</button>
            <button className='btn text-start '><BsPlayBtn className='fs-4 mb-1 me-4' />Playlist</button>
            <button className='btn text-start '><LuClock className='fs-4 mb-1 me-4' />Watch later</button>
            <button className='btn text-start '><CgPlayList className='fs-4 mb-1 me-4' />Liked videos</button>
            <hr />
            <button className='btn text-start d-flex  '><h5>Subcription</h5> <IoIosArrowForward className='fs-4 mb-1 me-4' /></button>
            <button className='btn text-start '><RxCounterClockwiseClock className='fs-4 mb-1 me-4' />ErrorMakesClever</button>
            <button className='btn text-start '><BsPlayBtn className='fs-4 mb-1 me-4' />Code io</button>
            <hr />
            <button className='btn text-start d-flex  '><h5>Explore</h5></button>
            <button className='btn text-start '><HiOutlineShoppingBag className='fs-4 mb-1 me-4' />Shopping</button>
            <button className='btn text-start '><HiOutlineMusicalNote className='fs-4 mb-1 me-4' />Music</button>
            <button className='btn text-start '><BiMoviePlay className='fs-4 mb-1 me-4' />Flim</button>
            <button className='btn text-start '><TbLivePhoto className='fs-4 mb-1 me-4' />Live</button>
            <button className='btn text-start '><SiYoutubegaming className='fs-4 mb-1 me-4' />Gaming</button>
            <button className='btn text-start '><BsPlayBtn className='fs-4 mb-1 me-4' />Spots</button>
            <button className='btn text-start '><BsPlayBtn className='fs-4 mb-1 me-4' />Fashion & Beauty</button>
            <button className='btn text-start '><BsPlayBtn className='fs-4 mb-1 me-4' />Podcast</button>
          </div>
        </div>
      )}

      {!open && (
          <div className='d-flex flex-column gap-3 w-25'>
          <div className='d-flex flex-column w-25'>
            <button className='btn text-start '><MdHome className='fs-4 mb-1 me-4' /><p className='mb-0'>Home</p></button>
            <button className='btn text-start '><BsPlayBtn className='fs-4 mb-1 me-4' /><p className='mb-0'>Shots</p></button>
            <button className='btn text-start '><BsCollectionPlay className='fs-4 mb-1 me-4' /><p className='mb-0'>Subcription</p></button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SideBar
