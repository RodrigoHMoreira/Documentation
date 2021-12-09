import HeaderDoc from '../header/header'
import MenuDoc from '../menu/menu'
import ContentDoc from '../content/content'
import './indexRoot.css'

export default function Index () {
  return (
    <div className='index'>
      <div className='headerIndex'>
        <HeaderDoc />
      </div>
      <div className='menuIndex'>
        <MenuDoc />
      </div>
      <div className='contentIndex'>
        <ContentDoc />
      </div>
    </div>
  )
}
