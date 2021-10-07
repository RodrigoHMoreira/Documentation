import './index.css';
import HeaderDoc from '../header/header';
import MenuDoc from '../menu/menu';
import ContentDoc from '../content/content';

export default function Index() {
 

  return (
    <div className="index">
      <div id="Header"><HeaderDoc/></div>

      <div id="Menu">
        <MenuDoc 
        one={'One'} 
        two={'Two'} 
        three={'Three'} 
        four={'Four'} 
        five={'Five'}
        six={'Six'}
        seven={'Seven'} 
        eight={'Eight'} 
        nine={'Nine'} 
        ten={'Ten'} 
        eleven={'Eleven'}
        twelve={'Twelve'}
        />
      </div>

      <div id="Content"><ContentDoc/></div>
    </div>
  );
}