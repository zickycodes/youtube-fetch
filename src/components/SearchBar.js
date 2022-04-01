import React, {useState} from "react";

const SearchBar = ({submitRequest}) => {
  const [term, setTerm] = useState('');

   const onInputChange = event => {
     setTerm(event.target.value)
   }

   const whenFormIsSubmitted = event => {
     event.preventDefault();
     submitRequest(term)
   }

   return (
    <div className = "search-bar ui segment">
      <form className = "ui form"  onSubmit = {whenFormIsSubmitted}>
        <div className = "field">
          <label>Video Search</label>
          <input
          type = "text"
          value = {term}
          onChange = {onInputChange}
          />
        </div>
      </form>     
    </div>
)

}



export default SearchBar;