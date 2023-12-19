import { useState } from "react";
import '../../styles/Home.scss';

function SearchBar({ onSubmit }) {
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
            <div className="contenitorimg">
                <img
                    className="immagine"
                    src='/images/artl.svg'
                />
            </div>
            
            <form onSubmit={handleFormSubmit} className="contenitore">
                    <input className="campotesto" value={term} onChange={handleChange} placeholder="Devi inserire qualcosa"/>
                    <button className="bottone">Cerca</button>

                    {/* {term.length < 1 && ' Devi inserire qualcosa'} */}
            </form>
        </div>
    )
}

export default SearchBar;