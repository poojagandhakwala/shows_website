import Screen1 from './screen1';
import {Route,BrowserRouter as Router, Routes, useParams} from 'react-router-dom';
import Screen2 from './screen2';

function App() {

  return (
    <div className="App">
     <Router>
      <Routes>
        <Route excat path="/" element={<Screen1 />} />
        <Route path="/shows" element={<Screen2 />}>
        </Route>
      </Routes>
      
     </Router>
    </div>
  );
}

export default App;
