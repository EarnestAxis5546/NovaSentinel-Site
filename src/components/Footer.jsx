import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900/80 backdrop-blur-lg py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; 2025 NovaSentinel. {t('footer-rights')}</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/EarnestAxis5546" className="px-4 py-2 bg-purple-500 rounded-full hover:bg-purple-400 transition-colors">{t('social-github')}</a>
          <a href="https://linkedin.com/in/example" className="px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-500 transition-colors">{t('social-linkedin')}</a>
          <a href="https://x.com/example" className="px-4 py-2 bg-black rounded-full hover:bg-gray-800 transition-colors">{t('social-x')}</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;