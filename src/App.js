import './App.css';

import { About } from './components/About/About';
import { Home } from './components/Home/Home';
import { Nav } from './components/Nav/Navbar';
import { Review } from './components/Review/Review';
import { Menu } from './components/Menu/Menu';
import { Footer } from './components/Footer/Footer';
import Blog from './components/Blog/Blog';


function App() {
  return (
    <div className="App">
    <Nav/> 
    <Home/>
    <About/>
    <Review/>
    <Menu/>
    <Blog/>
    <Footer/>
    </div>
  );
}

export default App;
