import './App.css';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/tasks" element={<Tasks/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
