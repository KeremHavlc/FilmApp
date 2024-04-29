import Add from './components/Add';
import Header from './components/Header';
import WatchList from './components/WatchList';
import Watched from './components/Watched';
import { GlobalProvider } from './context/GlobalState';
import './input.css';
import { BrowserRouter as Router, Routes , Route} from "react-router-dom";

function App() {
  return (
    <GlobalProvider>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<WatchList/>}/>
        <Route path='/watched' element={<Watched/>}/>
        <Route path='/add' element={<Add/>}/>
      </Routes>
    </Router>
    </GlobalProvider>
  );
}

export default App;
