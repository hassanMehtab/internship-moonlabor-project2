import CategoryItem from '../component/CategoryItem/CategoryItem';
import { Routes, Route } from 'react-router-dom';
import './Directory.style.scss';
const DirectoryItem = ({categories}) => {
    return (  
    <div className ="directorycontainer">
    {categories.map((category) => (
      <CategoryItem key={category.id} category={category}/>

  ))}
      
    </div>
  





    );
}
 
export default DirectoryItem;