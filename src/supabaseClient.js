import { createClient } from '@supabase/supabase-js';

// Ensure your Cloudflare Pages environment variables are prefixed with VITE_
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    'Supabase URL or Anon Key is missing. ' +
    'Make sure you have VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY set in your environment variables.'
  );
  // You could throw an error here or handle it gracefully
  // For now, we'll let createClient potentially fail if they are undefined,
  // or you can provide local fallbacks for development if not using a .env file.
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
