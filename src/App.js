
// import './component/CategoryItem/CategoryItem';
//import Directory from  './Directory/DirectoryItem';
import Home from './Routes/Home/Home';
import Authentication from './Authentication/Authentication';
import { Routes , Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Shop from './Routes/Home/Shop/Shop';
import CheckOut from './Routes/Home/CheckOut/CheckOut';
 



const App = () => {
  
  return (
    <div>
    <Routes>
    <Route path='/' element={<Navigation/>}>
    <Route index element={<Home/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/auth' element={<Authentication/>}/>
    <Route path='/checkout' element={<CheckOut/>}/>
    </Route>
    </Routes>
    </div>
    
  
  
    );
  
  
  
  
    };
  
 
export default App;