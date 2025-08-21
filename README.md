# 🚀 HMM Trading Dashboard

A modern web dashboard for Bitcoin trading strategy using Hidden Markov Models (HMM).

## 🎯 Overview

This dashboard provides real-time analysis and trading recommendations based on a Hidden Markov Model trained on Bitcoin price data from 2018-2022.

## ✨ Features

- **Real-time BTC Price Data**: Automatic fetching of the latest 30 days of Bitcoin data
- **State Prediction**: HMM-based market state analysis
- **Portfolio Management**: Track $10,000 initial capital with dynamic allocation
- **Interactive Charts**: Visual representation of price movements and states
- **Trading Recommendations**: AI-powered allocation suggestions

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 + TypeScript + Tailwind CSS
- **Backend**: Next.js API Routes
- **Data Processing**: Python (HMM model)
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Python 3.8+ (for HMM model)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hmm-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 Dashboard Components

### Current Status
- ✅ **Hello World Version**: Basic dashboard running successfully
- 🚧 **Real-time Data**: Coming soon
- 🚧 **State Analysis**: Coming soon
- 🚧 **Portfolio Management**: Coming soon

### Model Information
- **Training Period**: 2018-2022
- **Initial Capital**: $10,000
- **States**: 4 hidden states (Bull, Bear, High Vol, Low Vol)
- **Features**: Technical indicators, volatility, volume ratios

## 🎨 UI/UX Design

- **Theme**: Dark mode with blue/purple gradient
- **Layout**: Responsive grid design
- **Components**: Glassmorphism cards with backdrop blur
- **Charts**: Interactive with real-time updates

## 📈 Trading Strategy

The HMM model identifies 4 market states:
1. **Bull State**: High returns, low volatility
2. **Bear State**: Negative returns, high volatility  
3. **High Volatility State**: Mixed returns, high risk
4. **Low Volatility State**: Stable returns, low risk

Position allocation is dynamically adjusted based on:
- Current market state
- Drawdown levels
- Volatility conditions
- Risk management rules

## 🔧 Configuration

### Environment Variables
```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_MODEL_VERSION=1.0.0
```

### Model Parameters
- **n_components**: 4 (number of hidden states)
- **covariance_type**: "full"
- **n_iter**: 1000
- **random_state**: 42

## 🚀 Deployment

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
3. Deploy automatically on push to main branch

### Environment Setup
- Add environment variables in Vercel dashboard
- Configure Python runtime if needed
- Set up API endpoints

## 📝 API Endpoints

- `GET /api/fetch-data` - Get latest 30 days of BTC data
- `POST /api/predict-state` - Predict market state for given price
- `POST /api/update-portfolio` - Update portfolio after execution
- `GET /api/get-recommendations` - Get trading recommendations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for seamless deployment
- The HMM community for research and insights

---

**Status**: 🟢 Hello World Version - Ready for Local Development
**Next**: Deploy to Vercel and add real-time features
