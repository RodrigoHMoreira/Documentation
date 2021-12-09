import React, { useState } from 'react'
import './header.css'
import logoLight from '../images/logoMybots_Light.png'
import menuList from '../index/indexList.json'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import IconButton from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu';

// import { Link } from 'react-scroll'

export default function HeaderDoc () {
  const [contentValue, setContentValue] = useState(menuList)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <header className='headerLight'>
      <a href='http://localhost:3000/' target='_blank' rel='noreferrer'>
        <img className='logo' src={logoLight} alt='imgHeader' />
      </a>
      <div className='menuHeader'>
        <IconButton
          aria-controls='simple-menu'
          aria-haspopup='true'
          onClick={handleClick}
				>
          <MenuIcon/>
				</IconButton>

        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
				>
          {contentValue.map((item, index) => {
            return (
              <MenuItem>
                <Typography variant='inherit' noWrap />
                {item.title}
              </MenuItem>
            )
          })}
        </Menu>
      </div>
    </header>
  )
}
