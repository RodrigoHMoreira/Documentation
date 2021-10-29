import HeaderDoc from '../header/header'
import MenuDoc from '../menu/menu'
import ContentDoc from '../content/content'
import Routes from '../routes/routes'

export default function Index () {
  return (
    <div className='index'>
      <Routes />
      <HeaderDoc />
      <MenuDoc />
      <ContentDoc />
    </div>
  )
}
