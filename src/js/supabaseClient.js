import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://tbdjoduckjgzgfmbtyvs.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRiZGpvZHVja2pnemdmbWJ0eXZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI0ODQzMzUsImV4cCI6MTk5ODA2MDMzNX0.GVZeuwjn_UE7HYLu7e_C9CuEpez6pudx1GtMNbMgDKU"
);
