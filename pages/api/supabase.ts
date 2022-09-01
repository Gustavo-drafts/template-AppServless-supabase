import { createClient } from "@supabase/supabase-js";


const supabase = createClient(
  "https://pajldhzdzlcvfavbphcu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhamxkaHpkemxjdmZhdmJwaGN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE5NzU0NDcsImV4cCI6MTk3NzU1MTQ0N30.h75ZRgwaabcxkhiHnXPfH6-vrp85nLkAsZXL7TN7Dw4"
)

export default supabase;