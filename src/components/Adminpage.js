import React from 'react'

import './Admin.css'
import { Link } from 'react-router-dom'
import Navbarafter from './Navbarafter'
function Adminpage() {
  return (
    <div>
      <Navbarafter/>
      <div>
        <h1 className="app_prod8">welcome to the Admin Page</h1>
        <div className='butlistad'>
        <Link to='/Acccli'><button className='but10'>Client Accounts</button></Link>
        <Link to='/Formaff'><button className='but10'>Client Comments</button></Link>
        <Link to='/Productaff'><button className='but10'>Product List</button></Link>
      </div>
      </div>
    </div>
  )
}
export default Adminpage