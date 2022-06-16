import './formInput.style.scss';


const FormInput = ({label, ...otherProops}) => {

    
    return (
        <div className="group">
        <input className="form-input" {...otherProops}/>
            
        { 
            label && (
       <label className={`${otherProops.value.length ? 'shrink' : ''} form-input-label`}>
         {label}
        </label>
            )} 
            
            
            
        </div>
                
            
      );
}
 
export default FormInput;