import React, { useState } from 'react'
import './content.css'
import contentList from '../index/indexList.json'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Divider from '@mui/material/Divider'
import Modal from '@mui/material/Modal'

import { Link } from 'react-scroll'

export default function ContentDoc () {
  const [open, setOpen] = useState(false)
  const [image, setImage] = useState('false')

  return (
    <div id='docContent' className='docContent'>
      <div className='iconButtonTop'>
        <Link
          activeClass='link'
          to='docContent'
          spy
          smooth
          offset={-120}
          duration={2000}
          hashSpy
				>
          <KeyboardArrowUpIcon className='root' />
        </Link>
      </div>
      {contentList.map((item, index) => {
        return (
          <div id={item.link} key={index} className='content'>
            <h1>
              {item.title}
            </h1>
            <Divider className='divider' />
            <div className='imageContent'>
              <img
                src={item.image}
                className='image'
                alt='imgContent'
                onClick={() => {
                  return setOpen(true), setImage(item.image)
                }}
							/>
            </div>
            <p>
              {item.text}
            </p>
            <div className='videoContent'>
              <embed src={item.video} allowFullScreen className='video' />
            </div>
            {item.submenus.map((value, cont) => {
              return (
                <div id={value.link} key={cont} className='content2'>
                  <h1>
                  {value.title}
                </h1>
                  <p>
                  {value.text1}
                </p>
                  <p>
                  {value.text2}
                </p>
                </div>
              )
            })}
          </div>
        )
      })}
      <div>
        <Modal open={open} onClick={() => setOpen(false)}>
          <img src={image} className='imageZoom' alt='imgContent' />
        </Modal>
      </div>
    </div>
  )
}
