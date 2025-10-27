import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import './i18n';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import Home from './pages/Home';
import About from './pages/About';
import Internships from './pages/Internships';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import TechWatch from './pages/TechWatch';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';

export default function App() {
  return (
    <Router basename="/myportfolioIT">
      <div className="relative min-h-screen  text-white">
        <Background3D />
        <div className="relative z-10">
          <Navbar />
          <main className="container mx-auto px-4 pt-24 pb-8">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/internships" element={<Internships />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:slug" element={<ProjectDetail />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/tech-watch" element={<TechWatch />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}