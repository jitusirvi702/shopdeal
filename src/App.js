import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import { Home } from './components/home/Home';
import { Category } from './components/category/Category';
import { SingleProduct } from './components/products/SingleProduct';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import AppContext from './utils/context';
function App() {
  return(
    <Router>
      <AppContext>
      <Header/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/category/:id' element = {<Category/>}/>
        <Route path='/products/:id' element = {<SingleProduct/>}/>
      </Routes>
      <Footer/>
      </AppContext>
    </Router>
  ) 
}
export default App;
