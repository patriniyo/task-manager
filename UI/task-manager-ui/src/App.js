import './App.css';
import LoginPage from './components/LoginPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
