'use client';

import { useState, useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import Image from 'next/image';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function SignUp() {
  const router = useRouter();
  const { status } = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/dashboard');
    }
  }, [status, router]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Check if passwords match
      if (password !== confirmPassword) {
        toast.error('Passwords do not match');
        setLoading(false);
        return;
      }

      // Create user account
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Send verification email
      await sendEmailVerification(userCredential.user);
      
      // Show success message
      toast.success('Account created! Please check your email for verification');
      
      // Redirect to sign in page
      router.replace('/signin');
    } catch (error: unknown) {
      if (error instanceof Error) {
        // Handle Firebase errors with user-friendly messages
        const errorMessage = error.message;
        if (errorMessage.includes('email-already-in-use')) {
          toast.error('This email is already registered. Please sign in instead.');
        } else if (errorMessage.includes('invalid-email')) {
          toast.error('Please enter a valid email address.');
        } else {
          toast.error('Failed to create account. Please try again.');
        }
      } else {
        toast.error('An unexpected error occurred. Please try again.');
      }
      console.error('Sign up error:', error);
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
            <h1 className="text-2xl font-bold text-white mb-2">Create your account</h1>
            <p className="text-gray-400 text-sm">
              Join Trade Nest and start your crypto trading journey
            </p>
          </div>

          <form onSubmit={handleSignUp} className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#1a1b3e] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                required
              />
              <p className="mt-1 text-xs text-gray-400">
                We&apos;ll send a verification link to this email
              </p>
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#1a1b3e] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                required
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#1a1b3e] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#8B5CF6] text-white py-3 rounded-lg hover:bg-[#6c38e3] cursor-pointer transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#0a0b1e] text-gray-400">or Sign up with</span>
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
            Already have an account?{' '}
            <Link href="/signin" className="text-[#8B5CF6] hover:text-[#6c38e3]">
              Sign In
            </Link>
          </p>

          <div className="text-center text-xs text-gray-400 mt-4">
            By signing up, you agree to our{' '}
            <Link href="/terms" className="text-[#8B5CF6] hover:text-[#6c38e3]">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-[#8B5CF6] hover:text-[#6c38e3]">
              Privacy Policy
            </Link>
          </div>
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