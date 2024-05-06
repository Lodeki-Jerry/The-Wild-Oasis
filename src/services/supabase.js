import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://fjcavvqvdycshkrwlocq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqY2F2dnF2ZHljc2hrcndsb2NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxMTg3NzIsImV4cCI6MjAyNzY5NDc3Mn0.kUumO4eLaa3dUP5_K_DNJISMjnnTGHoU8GzTh4feVxE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
