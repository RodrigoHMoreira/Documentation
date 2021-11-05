import React, { useState } from 'react'
import './content.css'
import contentList from '../index/indexList.json'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Divider from '@mui/material/Divider'
import ZoomInIcon from '@mui/icons-material/ZoomIn'
import IconButton from '@mui/material/IconButton'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { Link } from 'react-scroll'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function ContentDoc () {
  const [open, setOpen] = useState(false)

  return (
    <div id='doc-content' className='docContent'>
      <div className='iconButtonTop'>
        <Link
          activeClass='link'
          to='doc-content'
          spy
          smooth
          offset={-120}
          duration={2000}
          hashSpy
				>
          <KeyboardArrowUpIcon className='root' />
        </Link>
      </div>
      {contentList.map(item => {
        return (
          <div id={item.link} className='content'>
            <h1>
              {item.title}
            </h1>
            <div className='imageContent'>
              <img src={item.image} className='image' alt='imgContent' />
              {console.log(item.image)}

              {/* <a  target="_blank" href={item.image}> */}
           
              <IconButton className='ZoomInIcon' onClick={() => setOpen(true)}>
                <ZoomInIcon />
              </IconButton>
              <div >
              <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby='modal-modal-title'
                sx={{background:'red'}}
							>
                <Box sx={style}>
                  <Typography id='modal-modal-title'>
										Teste
									</Typography>

                  {/* <img src={item.image}  alt='imgContent' /> */}
                  
                </Box>
              </Modal>
              </div>

              {/* </a> */}
            </div>
            <br />
            <p>
              {item.text}
            </p>
            <br />
            <div className='videoContent'>
              <embed
                src={item.video}
                allowfullscreen='true'
                className='video'
							/>
            </div>
            <br />
            <br />
            {item.submenus.map(value => {
              return (
                <div id={value.link} className='content'>
                  <h1>
                  {value.title}
                </h1>
                  <br />
                  <Divider className='divider' />
                  <br />
                  <br />
                  <p>
                  {value.text1}
                </p>
                  <br />
                  <p>
                  {value.text2}
                </p>
                  <br />
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
