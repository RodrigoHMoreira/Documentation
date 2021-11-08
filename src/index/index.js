import HeaderDoc from '../header/header'
import MenuDoc from '../menu/menu'
import ContentDoc from '../content/content'

export default function Index () {
  return (
    <div className='index'>
      <div>
        <HeaderDoc />
      </div>
      <div>
        <MenuDoc />
      </div>
      <div>
        <ContentDoc />
      </div>
    </div>
  )
}
