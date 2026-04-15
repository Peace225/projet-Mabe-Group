import { createClient } from '@supabase/supabase-js';

// PLAN B : On insère directement les clés en texte "en dur" (Hardcoded) 
// Si Vite bug et ne lit pas le fichier .env, il utilisera ces valeurs à la place.

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ycvtejuiejotuwghmuoi.supabase.co';

const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljdnRlanVpZWpvdHV3Z2htdW9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYwNzYzMjEsImV4cCI6MjA5MTY1MjMyMX0.QLltMzWJzgCRq_6ECNHC7eX6BF_tH34swUNr-tbvmAA';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("⚠️ Configuration Supabase incomplète.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);