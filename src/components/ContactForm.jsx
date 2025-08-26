import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';

function ContactForm() {
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) errors.name = t('form-name-error');
      if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = t('form-email-error');
      if (!values.message) errors.message = t('form-message-error');
      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      // Placeholder: Replace with Formspree or backend submission
      alert(t('form-success'));
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="max-w-lg mx-auto space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">{t('form-name')}</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          className="w-full mt-1 p-3 bg-gray-800/50 border border-purple-400 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
        />
        {formik.errors.name && <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium">{t('form-email')}</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="w-full mt-1 p-3 bg-gray-800/50 border border-purple-400 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
        />
        {formik.errors.email && <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium">{t('form-message')}</label>
        <textarea
          id="message"
          name="message"
          onChange={formik.handleChange}
          value={formik.values.message}
          className="w-full mt-1 p-3 bg-gray-800/50 border border-purple-400 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none resize-y min-h-[120px]"
        />
        {formik.errors.message && <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>}
      </div>
      <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full hover:from-purple-400 hover:to-cyan-300 transition-all">
        {t('form-submit')}
      </button>
    </form>
  );
}

export default ContactForm;