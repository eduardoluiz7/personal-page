import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/nav';
import { Contact } from './pages/contact';
import { Home } from './pages/home';
import { AnimatePresence } from 'framer-motion';

export function App() {
  return (
    <AnimatePresence mode="wait">
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              {
                /* <Route path="/skills" element={<Skills />} />
              <Route path="/experiences" element={<Experiences />} />  /> */
              }
                         
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AnimatePresence>
  );
}