import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const rawSupabaseUrl = process.env.SUPABASE_URL;
const rawSupabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;
const rawBucket = process.env.SUPABASE_BUCKET;

const supabaseUrl = rawSupabaseUrl?.trim().replace(/^"|"$/g, '');
const supabaseKey = rawSupabaseKey?.trim().replace(/^"|"$/g, '');
const supabaseBucket = rawBucket?.trim().replace(/^"|"$/g, '') || 'resumes';

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase configuration. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY or SUPABASE_ANON_KEY.');
}

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
  },
});

const verifySupabaseConnection = async () => {
  try {
    const { data, error } = await supabase.storage.getBucket(supabaseBucket);
    if (error) {
      console.error(`[Supabase] Bucket connection failed for '${supabaseBucket}':`, error.message || error);
      return;
    }
    if (!data) {
      console.warn(`[Supabase] Bucket '${supabaseBucket}' not found or could not be verified.`);
      return;
    }
    console.log(`[Supabase] Connected to bucket '${supabaseBucket}' successfully. Bucket details:`, data);
  } catch (err) {
    console.error('[Supabase] Unexpected bucket verification error:', err);
  }
};

verifySupabaseConnection();

export { supabaseBucket };
export default supabase;
