import { useTranslation } from 'react-i18next';

function Docs() {
  const { t } = useTranslation();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-purple-400 text-center mb-8">{t('docs-title')}</h1>
      <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold text-purple-400 mb-4">{t('docs-title')}</h2>
        <ul className="list-disc pl-6">
          <li><a href="https://github.com/EarnestAxis5546/NovaSentinel/blob/main/README.md" className="text-cyan-400 hover:text-cyan-300">{t('doc-readme')}</a></li>
          <li><a href="https://github.com/EarnestAxis5546/NovaSentinel/blob/main/LICENSE" className="text-cyan-400 hover:text-cyan-300">{t('doc-license')}</a></li>
          <li><a href="https://github.com/EarnestAxis5546/NovaSentinel/blob/main/CONTRIBUTING.md" className="text-cyan-400 hover:text-cyan-300">{t('doc-contributing')}</a></li>
        </ul>
      </div>
      <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl">
        <h2 className="text-2xl font-semibold text-purple-400 mb-4">{t('snippets-title')}</h2>
        <h3 className="text-xl font-semibold text-purple-400 mb-2">{t('csharp-snippet-title')}</h3>
        <pre className="bg-gray-900 p-4 rounded-lg text-cyan-400 font-mono overflow-x-auto">
{`// Example C# snippet for basic packet handling
using System.Net;

public class PacketAnalyzer {
    public void Analyze(IPAddress ip) {
        // Placeholder logic
        Console.WriteLine("Analyzing packet from: " + ip);
    }
}`}
        </pre>
        <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-2">{t('config-snippet-title')}</h3>
        <pre className="bg-gray-900 p-4 rounded-lg text-cyan-400 font-mono overflow-x-auto">
{`{
  "mitigation": {
    "threshold": 1000,
    "redis_host": "localhost"
  }
}`}
        </pre>
      </div>
    </section>
  );
}

export default Docs;