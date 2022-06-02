const App = () => {
  const categories = [
    {
      id:1,
      title:'hats',
    },
    {
      id:2,
      title:'womens',
    },
    {
      id:3,
      title:'mens',
    },
    {
      id:4,
      title:'jackets',
    },
    {
      id:5,
      title:'sneakers',
    }



    


  ]
  return (
    <div className ="categories-container">
    {categories.map(({title}) => (
      <div className="category-container">
      <div className=".background-image"/>
      <div className="category-body-container">
      <h1>{title}</h1>
      <p>Shop Now</p>
      
      </div>
      </div>
      



  ))}
    
    

    
    </div>
    
    
    

    
    
  
  
  
  
  );
};
 
export default App;