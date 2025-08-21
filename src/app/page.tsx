export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            🚀 HMM Trading Dashboard
          </h1>
          <p className="text-xl text-blue-200">
            Hidden Markov Model Bitcoin Trading Strategy
          </p>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto">
          {/* Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-2">Model Status</h3>
              <p className="text-green-400 text-2xl font-bold">✅ Trained</p>
              <p className="text-blue-200 text-sm">2018-2022 Data</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-2">Initial Capital</h3>
              <p className="text-yellow-400 text-2xl font-bold">$10,000</p>
              <p className="text-blue-200 text-sm">Starting Balance</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-2">Current State</h3>
              <p className="text-purple-400 text-2xl font-bold">--</p>
              <p className="text-blue-200 text-sm">Loading...</p>
            </div>
          </div>

          {/* Hello World Message */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              👋 Hello World!
            </h2>
            <p className="text-blue-200 text-lg mb-6">
              Welcome to the HMM Trading Dashboard. This is a simple "Hello World" version.
            </p>
            <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
              <p className="text-green-300 font-medium">
                ✅ Dashboard is running successfully!
              </p>
            </div>
          </div>

          {/* Feature Preview */}
          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">🚀 Coming Soon Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">📊</span>
                <span className="text-blue-200">Real-time BTC Price Charts</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">🎯</span>
                <span className="text-blue-200">State Prediction & Analysis</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">💰</span>
                <span className="text-blue-200">Portfolio Management</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">⚡</span>
                <span className="text-blue-200">Auto Data Fetching</span>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center mt-12">
          <p className="text-blue-300 text-sm">
            Built with Next.js 14 + TypeScript + Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
}
