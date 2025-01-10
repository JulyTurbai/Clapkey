import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <Router> 
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;

