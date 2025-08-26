import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-lg z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <Link to="/" className="text-2xl font-bold text-purple-400 hover:text-purple-300 transition-colors">
          NovaSentinel
        </Link>
        <nav className="flex items-center space-x-4">
          <NavLink to="/" className={({ isActive }) => `px-3 py-2 rounded-full ${isActive ? 'bg-purple-500' : 'hover:bg-purple-600'} transition-colors`}>{t('nav-home')}</NavLink>
          <NavLink to="/about-project" className={({ isActive }) => `px-3 py-2 rounded-full ${isActive ? 'bg-purple-500' : 'hover:bg-purple-600'} transition-colors`}>{t('nav-about-project')}</NavLink>
          <NavLink to="/about-me" className={({ isActive }) => `px-3 py-2 rounded-full ${isActive ? 'bg-purple-500' : 'hover:bg-purple-600'} transition-colors`}>{t('nav-about-me')}</NavLink>
          <NavLink to="/docs" className={({ isActive }) => `px-3 py-2 rounded-full ${isActive ? 'bg-purple-500' : 'hover:bg-purple-600'} transition-colors`}>{t('nav-docs')}</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `px-3 py-2 rounded-full ${isActive ? 'bg-purple-500' : 'hover:bg-purple-600'} transition-colors`}>{t('nav-contact')}</NavLink>
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            className="bg-gray-800 text-white border border-purple-400 rounded-full px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="en">English</option>
            <option value="sv">Svenska</option>
          </select>
        </nav>
      </div>
    </header>
  );
}

export default Header;