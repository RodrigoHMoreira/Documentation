import './App.css';
import Menu from './documentation/menu/menu';
import Header from './documentation/header/header';
import Footer from './documentation/footer/footer';
import Content from './documentation/content/content';
function App() {
  return (
    <div className="App">
        <div id="Header"><Header/></div>
        <div id="Menu"><Menu/></div>
        <div id="Content"><Content/></div>
        <div id="Footer"><Footer/></div>
    </div>
  );
}

export default App;
