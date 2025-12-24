import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import Contact from './Pages/Contact';
import Resume from './Pages/Resume';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
