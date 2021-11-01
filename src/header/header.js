import React from 'react'
import './header.css'
import logoLight from '../images/logoMybots_Light.png'

export default function HeaderDoc () {
  return (
    <header className='headerLight'>
      <a href='http://localhost:3000/' target='_blank' rel="noreferrer">
        <img className='logo' src={logoLight} alt="imgHeader"/>
      </a>
    </header>
  )
}
