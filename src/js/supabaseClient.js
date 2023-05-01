import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://tbdjoduckjgzgfmbtyvs.supabase.co",
  import.meta.env.VITE_SUPABASE_CONFIG
);
