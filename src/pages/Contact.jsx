import { useTranslation } from 'react-i18next';
import ContactForm from '../components/ContactForm';

function Contact() {
  const { t } = useTranslation();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-purple-400 text-center mb-8">{t('contact-title')}</h1>
      <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl mb-8">
        <ContactForm />
      </div>
      <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl">
        <h2 className="text-2xl font-semibold text-purple-400 mb-4">{t('location-title')}</h2>
        <p>{t('location-text')}</p>
        <div className="mt-4 text-center text-sm opacity-70">{t('map-placeholder')}</div>
        {/* Optional: Add Google Maps iframe here for actual map */}
      </div>
    </section>
  );
}

export default Contact;