import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Website from '../Components/Website'
import Trafficlight from './Trafficlight'
import GroundTheme from './GroundTheme'
import Found from './Found'
import Card from './Card'
import Page2 from '../page/Page2'

const Routers = () => {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path='/website' element={<Website/>}/>
              <Route path='/traffic' element={<Trafficlight/>}/>
              <Route path='/theme' element={<GroundTheme/>}/>
              <Route path='*' element={<Found/>}/>
              <Route path='/popup' element={<Card/>}/>
              <Route path="/" element ={<Page2/>} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routers
