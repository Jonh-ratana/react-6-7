import React from 'react'
import Nav from './Nav'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Category from './Category'
import Home from './Home'
import Delivery from './Delivery'
export default function Main() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/category' element={<Category/>} />
            <Route path='/delivery' element={<Delivery/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
