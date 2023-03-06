
import './App.css';
import AddUser  from './components/AddUser';
import Navbar from './components/Navbar';
import AllUsers from './components/AllUsers';
import HomePage from './components/Homepage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path ="/" element ={<HomePage/>} />
     <Route path ="/adduser" element ={<AddUser/>} />
    <Route path ="/allusers" element ={<AllUsers/>   } /> 
     </Routes> 
   </BrowserRouter>
  );
}

export default App;
