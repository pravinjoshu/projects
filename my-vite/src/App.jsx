import React from 'react';
import AddForm from './FormTable/AddForm';
import BookingPage from './FormTable/BookingPage';
import EditForm from './FormTable/EditForm'
import { BrowserRouter,Route,Routes } from 'react-router'
import UploadBox from './pages/UploadBox';

function App() {
  return (
  <BrowserRouter>
    <Routes>      
       <Route path='/' element={<BookingPage/>}/>
       <Route path='/addform' element={<AddForm/>}/>
       <Route path='/editform' element={<EditForm/>}/>      
       <Route path='/upload' element={<UploadBox/>}/>      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
