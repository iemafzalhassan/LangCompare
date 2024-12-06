import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Languages from './pages/Languages';
import LanguageDetail from './pages/LanguageDetail';
import Trends from './pages/Trends';
import Quiz from './pages/Quiz';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/languages/:id" element={<LanguageDetail />} />
          <Route path="/trends" element={<Trends />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;