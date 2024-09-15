import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/nav';
import { Skills } from './pages/skills';
import { Contact } from './pages/contact';
import { Home } from './pages/home';
import { Experiences } from './pages/experiences';

export function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='experiences' element={<Experiences />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}