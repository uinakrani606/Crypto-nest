# Crypto Market Analytics

A modern web application for analyzing cryptocurrency markets with advanced indicators and real-time data.

## Features

- Modern, responsive UI with dark mode
- User authentication with email and social providers
- Email verification
- Protected dashboard
- Real-time crypto market data
- Technical indicators

## Prerequisites

- Node.js 18.x or later
- npm or yarn
- Firebase account
- Google, Facebook, and Twitter developer accounts (for social login)

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd crypto-market-analytics
```

2. Install dependencies:
```bash
npm install
```

3. Create a Firebase project and enable Authentication with the following providers:
   - Email/Password
   - Google
   - Facebook
   - Twitter

4. Set up OAuth credentials for social login providers:
   - Google: Create OAuth 2.0 credentials in Google Cloud Console
   - Facebook: Create an app in Facebook Developers Console
   - Twitter: Create an app in Twitter Developer Portal

5. Copy the `.env.local.example` file to `.env.local` and fill in your credentials:
```bash
cp .env.local.example .env.local
```

6. Update the `.env.local` file with your:
   - Firebase configuration
   - NextAuth configuration
   - OAuth provider credentials

## Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production

Build the application:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Environment Variables

Required environment variables:

### Firebase Configuration
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

### NextAuth Configuration
- `NEXTAUTH_URL`
- `NEXTAUTH_SECRET`

### OAuth Providers
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `FACEBOOK_CLIENT_ID`
- `FACEBOOK_CLIENT_SECRET`
- `TWITTER_CLIENT_ID`
- `TWITTER_CLIENT_SECRET`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
