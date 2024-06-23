import {Routes,Route,Link} from 'react-router-dom'
import  './App.css'
import  Career from './pages/career'
import CyberSecurity from './pages/cyber'
import DataScience from './pages/datascience'
import FullstackDevelopment from './pages/fullstack'
import Home from './pages/home'

function App() {
  

  return (
    <>
      
      <div className='pages'>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/fullstackdevelopment'> FullstackDevelopment</Link>
          <Link to='/datascience'> DataScience</Link>
          <Link to='/cyber'> CyberSecurity</Link>
          <Link to='/career'> Career</Link>
        </div>
        <Routes>
          <Route Component={Home} path='/' />
          <Route Component={FullstackDevelopment} path='/fullstackdevelopment' />
          <Route Component={DataScience} path='/datascience' />
          <Route Component={CyberSecurity} path='/cyber' />
          <Route Component={Career} path='/career'/>
          
       </Routes>
      </div>
      
    </>
  )
}

export default App
