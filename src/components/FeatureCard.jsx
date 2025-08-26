function FeatureCard({ title }) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
      <h3 className="text-lg font-semibold text-purple-400">{title}</h3>
    </div>
  );
}

export default FeatureCard;