import React, { useState, useEffect } from 'react'
import menuList from '../index/indexList.json'
import './menu.css'
import MenuItem from '@mui/material/MenuItem'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import DescriptionIcon from '@mui/icons-material/Description'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'

import { Link } from 'react-scroll'

export default function MenuDoc () {
  const [searchResult, setSearchResult] = useState('')
  const [contentValue, setContentValue] = useState(menuList)

  const searchList = () => {
    if (searchResult !== '') {
      const newList = menuList.filter(value =>
				value.title.toLowerCase().includes(searchResult)
			)
      setContentValue(newList)
    } else {
      setContentValue(menuList)
    }
  }

  useEffect(searchList, [searchResult])

  return (
    <div className='sideBar'>
      <div className='inputSearch'>
        <TextField
          placeholder='Pesquisar'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
						)
          }}
          value={searchResult}
          onChange={e => setSearchResult(e.target.value)}
				/>
      </div>
      {contentValue.length === 0
				? 
        <div className='erro'>
            <p>
              <strong>Não existe opção para "</strong>
              {searchResult}
              <strong>"</strong>
            </p>
					</div>
				: 
        contentValue.map((item, index) => {
  return (
    <Accordion id='topicos' key={index}>
      <div className='title'>
        <Link
          activeClass='link'
          to={item.link}
          spy
          smooth
          offset={-100}
          duration={500}
          hashSpy
									>
          <div className='sumary'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ ml: 1 }} />}
											>
              <div className='sumaryContent'>
                <FolderOpenIcon sx={{ mr: 1 }} />
                {item.title}
              </div>
            </AccordionSummary>
          </div>
        </Link>
      </div>
      {item.submenus.map((submenu, submenuIndex) => {
        return (
          <Tooltip title={submenu.title} key={submenuIndex}>
            <div className='item'>
              <Link
                activeClass='link'
                to={submenu.link}
                spy
                smooth
                offset={-100}
                duration={500}
                hashSpy
												>
                <MenuItem>
                  <DescriptionIcon sx={{ mr: 1 }} />
                  <Typography variant='inherit' noWrap>
                    {submenu.title}
                  </Typography>
                </MenuItem>
              </Link>
            </div>
          </Tooltip>
        )
      })}
    </Accordion>
  )
})}
    </div>
  )
}
