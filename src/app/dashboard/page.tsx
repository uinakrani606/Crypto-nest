'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Script from 'next/script';
import { ChartBarIcon, CurrencyDollarIcon, UserGroupIcon, CogIcon } from '@heroicons/react/24/outline';

interface TradingViewWidgetConfig {
  width: string;
  height: string;
  symbol: string;
  interval: string;
  timezone: string;
  theme: string;
  style: string;
  locale: string;
  toolbar_bg: string;
  enable_publishing: boolean;
  allow_symbol_change: boolean;
  container_id: string;
}

declare global {
  interface Window {
    TradingView: {
      widget: new (config: TradingViewWidgetConfig) => void;
    };
  }
}

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/signin');
    }
  }, [status, router]);

  useEffect(() => {
    // Initialize TradingView widget after the script is loaded
    if (typeof window !== 'undefined' && window.TradingView) {
      new window.TradingView.widget({
        width: "100%",
        height: "600",
        symbol: "BINANCE:BTCUSDT",
        interval: "D",
        timezone: "exchange",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        allow_symbol_change: true,
        container_id: "tradingview_chart"
      });
    }
  }, []);

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-[#0a0b1e] flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0b1e]">
      {/* Navigation */}
      <nav className="bg-[#1a1b3e] border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-white text-xl font-bold">Crypto Analytics</span>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => signOut()}
                className="ml-4 px-4 py-2 text-sm text-white bg-[#8b5cf6] cursor-pointer hover:bg-[#6c38e3] transition-all duration-300 ease-in-out rounded-md"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Welcome Message */}
          <div className="mb-8">
            <div className="bg-[#1a1b3e] shadow rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Welcome, {session?.user?.name || 'User'}!</h2>
              <p className="text-gray-300">
                This is your dashboard where you can access all the crypto market analytics and indicators.
                More features coming soon!
              </p>
            </div>
          </div>
          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-[#1a1b3e] overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <ChartBarIcon className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-400 truncate">BTC Price</dt>
                      <dd className="text-lg font-medium text-white">$45,000</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1b3e] overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <CurrencyDollarIcon className="h-6 w-6 text-green-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-400 truncate">24h Volume</dt>
                      <dd className="text-lg font-medium text-white">$2.4T</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1b3e] overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <UserGroupIcon className="h-6 w-6 text-purple-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-400 truncate">Active Users</dt>
                      <dd className="text-lg font-medium text-white">1.2M</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1b3e] overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <CogIcon className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-400 truncate">System Status</dt>
                      <dd className="text-lg font-medium text-white">Online</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TradingView Chart */}
          <div className="mt-8">
            <div className="bg-[#1a1b3e] shadow rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Bitcoin Price Chart</h2>
              <div className="tradingview-widget-container">
                <div id="tradingview_chart" className="h-[600px]"></div>
                <Script
                  src="https://s3.tradingview.com/tv.js"
                  strategy="lazyOnload"
                  onLoad={() => {
                    if (typeof window !== 'undefined' && window.TradingView) {
                      new window.TradingView.widget({
                        width: "100%",
                        height: "600",
                        symbol: "BINANCE:BTCUSDT",
                        interval: "D",
                        timezone: "exchange",
                        theme: "dark",
                        style: "1",
                        locale: "en",
                        toolbar_bg: "#f1f3f6",
                        enable_publishing: false,
                        allow_symbol_change: true,
                        container_id: "tradingview_chart"
                      });
                    }
                  }}
                />
              </div>
            </div>
          </div>

          
        </div>
      </main>
    </div>
  );
} 