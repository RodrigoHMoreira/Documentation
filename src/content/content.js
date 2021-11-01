import React from 'react'
import './content.css'
import contentList from '../index/indexList.json'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Divider from '@mui/material/Divider'

import { Link } from 'react-scroll'

export default function ContentDoc () {
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
              <img  src={item.image} className='image' alt='imgMenu'/>
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
