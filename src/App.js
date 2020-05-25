  
import React from 'react';

const api = {
  key: "5fe2802e171053b1fa865c27854ddc6f",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input 
           type="text"
           className="search-bar" 
           placeholder="search"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
