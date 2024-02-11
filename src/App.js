import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import { Home } from './pages/home/Home';
import { Allproducts } from './pages/allproducts/Allproducts';
// import { Dashboard } from './pages/admin/dashboard/Dashboard';
import  {Nopage}  from './pages/nopage/Nopage';
import MyState from './context/data/myState';
function App() {
  return(
    <MyState>
    <Router>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/allproducts' element = {<Allproducts/>}/>
        {/* <Route path='/dashboard' element = {<Dashboard/>}></Route> */}
        <Route path='/*' element = {<Nopage/>}/>
      </Routes>
    </Router>
   </MyState>
  ) 
}
export default App;
