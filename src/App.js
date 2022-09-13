import './App.css';
import Topbars from './components/Topbars';
import Search from './components/search';
import Btnsearch from './components/btnsearch'
import Marques from './components/marques';
import Chaussures from './components/chaussures';



function App() {
  return (
    <div className="App">
      <Topbars/>
      <Search/>
      <Btnsearch/>
      <Marques/>
      <Chaussures/>
    </div>
  );
}

export default App;
