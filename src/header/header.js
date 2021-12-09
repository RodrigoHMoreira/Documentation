import React, { useState } from 'react'
import './header.css'
import logoLight from '../images/logoMybots_Light.png'
import IconButton from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer';
import MenuHeader from '../menu/menu'

export default function HeaderDoc () {
  
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    open === false ? setOpen(true) : setOpen(false)
  };

  return (
    <header className='headerLight'>
      <div className='menuHeader'>
      <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
      <Drawer
        className=''
        variant="persistent"
        anchor="left"
        open={open}
        sx={{with:250}}
      >
          <MenuHeader/>
        </Drawer>
      </div>

      <a href='http://localhost:3000/' target='_blank' rel='noreferrer'>
        <img className='logo' src={logoLight} alt='imgHeader' />
      </a>
    </header>
  )
}
