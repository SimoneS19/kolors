import SearchBar from "./components/searchBar";
import ColorList from "./components/colorList";
import apiGtp from "./api/apiGtp";
import { useState } from "react";
import '../styles/Home.scss';

export default function App() {
  const [colors, setColors] = useState([])

  const handleSubmit = async (term) => {
    const result = await apiGtp(term);
    setColors(result);
    console.log(`Hai cercato questo colore: ${term}`)
  };

  return (
    <div>
      <div className="colorcount">
        RISULTATO RICERCA: {colors.length}
      </div>
      <SearchBar onSubmit={handleSubmit} />
      <ColorList colorS={colors} />
    </div> 
  );
};