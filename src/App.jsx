import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutProject from './pages/AboutProject';
import AboutMe from './pages/AboutMe';
import Docs from './pages/Docs';
import Contact from './pages/Contact';
import './styles/index.css';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-950 text-white">
          <Header />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-project" element={<AboutProject />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/docs" element={<Docs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;