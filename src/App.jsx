import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/about/About';
import { Contacts } from './pages/contacts/Contacts';
import ScrollToTop from './components/ScrollToTop.js';
import { NotFound } from './pages/notFound/NotFound.jsx';


function App() {
  return (
    <Router> 
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={ < Layout />}>
          <Route index element={ < Home />} />
          <Route path='about' element={ < About />} />
          <Route path='contacts' element={ < Contacts />} />
          <Route path="*" element={ <NotFound />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

