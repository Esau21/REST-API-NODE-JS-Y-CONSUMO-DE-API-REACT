import './App.css';
import Agree from './components/Agree';
import Navbar from './components/Navbar';
import User from './components/User';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<User/>} />
          <Route path='/agree' element={<Agree/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
