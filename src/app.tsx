import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/nav';
import { Home } from './pages/home';
import { About } from './pages/about';
import { Skills } from './pages/skills';
import { Contact } from './pages/contact';

export function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar não interfere na altura flex */}
        <Navbar />
        {/* Flex-grow garante que o conteúdo central ocupe a altura restante */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}