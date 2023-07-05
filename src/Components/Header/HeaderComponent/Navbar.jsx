import React from 'react'
import logo from '../../../asset/logo.png'
import Button from '../../Button'

const Navbar = () => {
  return (
    <div className=' bg-blue-600 flex items-center justify-between px-60 w-screen h-16'>
        <div>
            <img src={logo} alt="" width="70%"/>
        </div>

        <ul className=' flex gap-6 text-white font-medium' >
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Testimonial</li>
            <li>Pricing</li>
        </ul>
        <div>
            <Button>Get Started</Button>
        </div>
    </div>
  )
}

export default Navbar