import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { Database } from "@/types/supabase.types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let supabase: SupabaseClient;

if (supabaseUrl && supabaseKey) {
  supabase = createClient<Database>(supabaseUrl, supabaseKey);
} else {
  throw new Error("No Supabase URL or Key defined");
}

export default supabase;
