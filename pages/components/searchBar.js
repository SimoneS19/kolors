import { useState } from "react";
import style from '../../styles/Home.module.scss';

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
            <div className={style.contenitorimg}>
                <img
                    className={style.img}
                    src='/images/artl.svg'
                />
            </div>
            
            <div className={style.container}>
                <form onSubmit={handleFormSubmit}>
                    <input className={style.searchBar} value={term} onChange={handleChange} placeholder="Devi inserire qualcosa"/>
                    <button className={style.search}>Cerca</button>

                    {/* {term.length < 1 && ' Devi inserire qualcosa'} */}
                </form>
        </div>
        </div>
    )
}

export default SearchBar;