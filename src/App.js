
// import './component/CategoryItem/CategoryItem';
//import Directory from  './Directory/DirectoryItem';
import Home from './Routes/Home/Home';
import SignIn from './Routes/Home/SignIn'
import { Routes , Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
const Shop = () => {
  return ( 
    <div>
    <h1>Shop here</h1>
    </div>


   );
}
 



const App = () => {
  
  return (
    <div>
    <Routes>
    <Route path='/' element={<Navigation/>}>
    <Route index element={<Home/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    </Route>
    </Routes>
    </div>
    
  
  
    );
  
  
  
  
    };
  
 
export default App;