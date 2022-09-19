import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Screen/footer/Footer';
import NavBar from './Screen/NavBar/NavBar';
import LandingPage from './Screen/LandingPage/LandingPage';
import Table from './Components/Table/Table';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/table' element={<Table/>} />
        </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
