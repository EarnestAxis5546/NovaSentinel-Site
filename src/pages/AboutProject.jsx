import { useTranslation } from 'react-i18next';

function AboutProject() {
  const { t } = useTranslation();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-purple-400 text-center mb-8">{t('about-title')}</h1>
      <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl mb-8">
        <p>{t('about-description')}</p>
      </div>
      <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold text-purple-400 mb-4">{t('architecture-title')}</h2>
        <p>{t('architecture-description')}</p>
      </div>
      <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold text-purple-400 mb-4">{t('csharp-title')}</h2>
        <p>{t('csharp-description')}</p>
      </div>
      <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold text-purple-400 mb-4">{t('techstack-title')}</h2>
        <ul className="list-disc pl-6">
          <li>{t('techstack-redis')}</li>
          <li>{t('techstack-envoy')}</li>
          <li>{t('techstack-ebpf')}</li>
          <li>{t('techstack-robusttoolbox')}</li>
          <li>{t('techstack-csharp')}</li>
          <li>{t('techstack-arch')}</li>
        </ul>
      </div>
      <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl">
        <h2 className="text-2xl font-semibold text-purple-400 mb-4">{t('schematic-title')}</h2>
        <pre className="bg-gray-900 p-4 rounded-lg text-cyan-400 font-mono overflow-x-auto">
{`+-------------------+     +-------------------+
| Inbound Traffic  | --> |   Envoy Proxy     |
+-------------------+     +-------------------+
                               |
                               v
+-------------------+     +-------------------+
|   eBPF Filter     | <-- |   Redis Cache     |
+-------------------+     +-------------------+
                               |
                               v
+-------------------+     +-------------------+
| C# Core Engine    | --> | Mitigation Output |
+-------------------+     +-------------------+
`}
        </pre>
        {/* Optional SVG-based diagram (uncomment to use):
        <svg viewBox="0 0 400 200" className="w-full h-auto my-4">
          <rect x="10" y="10" width="100" height="50" fill="#6b5b95" stroke="#00d4ff" strokeWidth="2"/>
          <text x="15" y="40" fill="white" fontSize="12">Inbound Traffic</text>
          <rect x="150" y="10" width="100" height="50" fill="#6b5b95" stroke="#00d4ff" strokeWidth="2"/>
          <text x="155" y="40" fill="white" fontSize="12">Envoy Proxy</text>
          <path d="M110 35 H140" stroke="#00d4ff" strokeWidth="2" markerEnd="url(#arrow)"/>
          <rect x="10" y="80" width="100" height="50" fill="#6b5b95" stroke="#00d4ff" strokeWidth="2"/>
          <text x="15" y="110" fill="white" fontSize="12">eBPF Filter</text>
          <rect x="150" y="80" width="100" height="50" fill="#6b5b95" stroke="#00d4ff" strokeWidth="2"/>
          <text x="155" y="110" fill="white" fontSize="12">Redis Cache</text>
          <path d="M200 60 V80" stroke="#00d4ff" strokeWidth="2" markerEnd="url(#arrow)"/>
          <path d="M110 105 H140" stroke="#00d4ff" strokeWidth="2" markerEnd="url(#arrow)"/>
          <rect x="10" y="150" width="100" height="50" fill="#6b5b95" stroke="#00d4ff" strokeWidth="2"/>
          <text x="15" y="180" fill="white" fontSize="12">C# Core Engine</text>
          <rect x="150" y="150" width="100" height="50" fill="#6b5b95" stroke="#00d4ff" strokeWidth="2"/>
          <text x="155" y="180" fill="white" fontSize="12">Mitigation Output</text>
          <path d="M200 130 V150" stroke="#00d4ff" strokeWidth="2" markerEnd="url(#arrow)"/>
          <path d="M110 175 H140" stroke="#00d4ff" strokeWidth="2" markerEnd="url(#arrow)"/>
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
              <path d="M0,0 L0,6 L9,3 z" fill="#00d4ff"/>
            </marker>
          </defs>
        </svg>
        */}
      </div>
    </section>
  );
}

export default AboutProject;