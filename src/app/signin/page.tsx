'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import toast from 'react-hot-toast';

export default function SignIn() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        toast.error('Invalid email or password');
      } else {
        router.push(callbackUrl);
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0b1e] flex">
      {/* Left Section */}
      <div className="w-1/2 p-8 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full space-y-8">
          <div className="text-center mb-10">
            <h1 className="text-2xl font-bold text-white mb-2">Login to Trade Nest</h1>
            <p className="text-gray-400 text-sm">
              To keep connected with us please login with your personal info
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg bg-[#1a1b3e] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                required
              />
            </div>

            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-lg bg-[#1a1b3e] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <Link href="/forgot-password" className="text-sm text-[#8B5CF6] hover:text-[#6c38e3]">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="cursor-pointer w-full bg-[#8B5CF6] text-white py-3 rounded-lg hover:bg-[#6c38e3] transition-colors duration-200 font-medium"
            >
              {loading ? 'Signing in...' : 'Login to your Account'}
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#0a0b1e] text-gray-400">or Sign in with</span>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
              className="cursor-pointer p-2 rounded-full border border-gray-700 hover:bg-gray-800 transition-colors duration-200"
            >
              <Image src="/google.svg" alt="Google" width={24} height={24} />
            </button>
            <button
              onClick={() => signIn('facebook', { callbackUrl: '/dashboard' })}
              className="cursor-pointer p-2 rounded-full border border-gray-700 hover:bg-gray-800 transition-colors duration-200"
            >
              <Image src="/facebook.svg" alt="Facebook" width={24} height={24} />
            </button>
          </div>

          <p className="text-center text-gray-400 mt-8">
            Don&apos;t have account?{' '}
            <Link href="/signup" className="text-[#8B5CF6] hover:text-[#6c38e3]">
              Register Now
            </Link>
          </p>
        </div>
      </div>

      {/* Right Section - Illustration */}
      <div className="w-1/2 bg-[#1a1b3e] p-8 flex items-center justify-center">
        <div className="max-w-lg">
          <Image
            src="/images/Login-page.svg"
            alt="Trading Illustration"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
} 