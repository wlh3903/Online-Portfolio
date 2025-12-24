import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;
