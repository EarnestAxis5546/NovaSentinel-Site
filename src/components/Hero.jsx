import { useTranslation } from 'react-i18next';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

function Hero() {
  const { t } = useTranslation();

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-blue-950">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#6b5b95' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            move: { enable: true, speed: 2, direction: 'none', random: true, out_mode: 'out' },
          },
          interactivity: {
            events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
            modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } },
          },
          retina_detect: true,
        }}
        className="absolute inset-0"
      />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-purple-400 animate-pulse">{t('hero-title')}</h1>
        <p className="text-xl md:text-2xl mt-4 opacity-90">{t('hero-tagline')}</p>
        <div className="mt-8 flex justify-center space-x-4">
          <a href="https://github.com/EarnestAxis5546/NovaSentinel" className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full hover:from-purple-400 hover:to-cyan-300 transition-all">{t('cta-github')}</a>
          <a href="/docs" className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full hover:from-gray-500 hover:to-gray-400 transition-all">{t('cta-docs')}</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;