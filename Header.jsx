import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
export default function Header() {
  return (
    <>
    <header className='header'>
      <nav className='header_nav'>
        <ul className='header_list'>
          <li className='header_item'><Link to = '/'>Main</Link></li> 
          <li className='header_item'><Link to = '/about'>About me</Link></li>
          <li className='header_item'><Link to = '/skills'>My skills</Link></li>
          <li className='header_item'><Link to = '/portfolio'>Portfolio</Link></li>
          <li className='header_item'><Link to = '/contacts'>contacts</Link></li>
        </ul>
      </nav>
    </header>
    </>
  )
}
