import SearchBar from "./components/searchBar";
import React, { useCallback } from 'react';

function App() {

  const handleSubmit = useCallback((term) => {
    console.log(`Vuoi cercare ${term}`);
  }, []);

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
};

export default App;