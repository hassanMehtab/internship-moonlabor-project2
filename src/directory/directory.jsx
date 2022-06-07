import CategoryItem from '../component/CategoryItem/CategoryItem';
import './directory.style.scss';
const directory = (categories) => {
    return (  
        <div className ="directorycontainer">
    {categories.map((category) => (
      <CategoryItem key={category.id} category={category}/>

  ))}
      
    </div>
  





    );
}
 
export default directory;