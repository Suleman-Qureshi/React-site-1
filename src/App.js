import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import Team from './component/Team';
function App() {
  return (
 <>
 <div className='overflow-x-hidden'>
 <NavBar/>
 <Outlet/>
 <Team/>
 <Footer/>
 </div>
 </>
  );
}

export default App;
