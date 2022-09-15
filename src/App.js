import './App.css';
import Topbars from './components/Topbars';
import Search from './components/search';
import Btnsearch from './components/btnsearch'
import Marques from './components/marques';
import Chaussures from './components/chaussures';
import Filterone from './components/filterone';



function App() {
  return (
    <div className="App">
      <Topbars/>
      <Search/>
      <Btnsearch/>
      <Marques/>
      <Chaussures/>
      <Filterone/>
    </div>
  );
}

export default App;
