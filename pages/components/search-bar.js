import { useState } from "react";
import '../../styles/home.scss';

const SearchBar = ({ onSubmit }) => {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {        
        event.preventDefault();
        onSubmit(term);
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    };


    return(
        <div>
            <form onSubmit={handleFormSubmit} className="formContainer">
                <input className="formContainer__inputText" value={term} onChange={handleChange} placeholder="Devi inserire qualcosa"/>
                <button className="formContainer__buttonSearch">Cerca</button>
            </form>
        </div>
    )
}


export default SearchBar;