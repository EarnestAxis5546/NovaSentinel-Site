import { useTranslation } from 'react-i18next';

function AboutMe() {
  const { t } = useTranslation();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-purple-400 text-center mb-8">{t('about-me-title')}</h1>
      <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl text-center">
        <svg className="w-40 h-40 mx-auto mb-4 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
        <p><strong>{t('name-label')}</strong> Earnest Riivitse</p>
        <p><strong>{t('bio-label')}</strong> {t('bio-text')}</p>
        <p><strong>{t('experience-label')}</strong> {t('experience-text')}</p>
        <h2 className="text-2xl font-semibold text-purple-400 mt-6 mb-4">{t('contacts-title')}</h2>
        <ul className="list-none space-y-2">
          <li><strong>{t('email-label')}</strong> <a href="mailto:example@email.com" className="text-cyan-400 hover:text-cyan-300">example@email.com</a></li>
          <li><strong>{t('github-label')}</strong> <a href="https://github.com/EarnestAxis5546" className="text-cyan-400 hover:text-cyan-300">EarnestAxis5546</a></li>
          <li><strong>{t('linkedin-label')}</strong> <a href="https://linkedin.com/in/example" className="text-cyan-400 hover:text-cyan-300">LinkedIn Profile</a></li>
        </ul>
        <h2 className="text-2xl font-semibold text-purple-400 mt-6 mb-4">{t('portfolio-title')}</h2>
        <ul className="list-none space-y-2">
          <li><a href="https://github.com/EarnestAxis5546" className="text-cyan-400 hover:text-cyan-300">{t('portfolio-github')}</a></li>
          <li><a href="https://x.com/example" className="text-cyan-400 hover:text-cyan-300">{t('portfolio-x')}</a></li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;