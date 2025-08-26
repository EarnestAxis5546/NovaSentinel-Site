import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Hero />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-purple-400 text-center mb-8">{t('features-title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard title={t('feature-1')} />
          <FeatureCard title={t('feature-2')} />
          <FeatureCard title={t('feature-3')} />
          <FeatureCard title={t('feature-4')} />
          <FeatureCard title={t('feature-5')} />
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-800/50 backdrop-blur-lg rounded-xl">
        <h2 className="text-3xl font-bold text-purple-400 text-center mb-8">{t('description-title')}</h2>
        <p className="text-center">{t('description')}</p>
      </section>
    </>
  );
}

export default Home;