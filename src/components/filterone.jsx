import React from 'react';

const marques = ['Nike', 'Adidas', 'Converse', 'Fils', 'Vans'];


function App() {
    return (
      <div>
        {marques.filter(marques=> marques.includes('marque.marque')).map(filteredMarque => (
          <li>
            {filteredMarque}
          </li>
        ))}
      </div>
    );
  }
  
  export default App;