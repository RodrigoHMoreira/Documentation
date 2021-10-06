import './App.css';
import MenuDoc from './menu/menu';
import Header from './header/header';
import ContentDoc from './content/content';


export default function App() {
 

  return (
    <div className="App">
      <div id="Header"><Header/></div>

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

