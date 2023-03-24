import { useState } from "react"

export const AddCategory = ( {onNewCategory} ) => {

    const [inputValue, setInputValue] = useState();
    const handleChange = ({target}) => {
        setInputValue(target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const newTrimmedValue = inputValue.trim();
        if(!inputValue || newTrimmedValue.length <= 1) return;
        // onNewCategory((categories) => [ inputValue, ...categories]);
        onNewCategory(newTrimmedValue);
        setInputValue('');  
    }

  return (
    <form onSubmit={handleSubmit} action=''>
        <input 
            type="text"
            placeholder="Buscar GIFs"
            value={inputValue || ''}
            onChange={handleChange}
        />
    </form>
  )
}
