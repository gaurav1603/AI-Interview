import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabaseUrl=process.env.NEXT_PUBLIC_SUPABASEURL
const supabaseAnontations=process.env.NEXT_PUBLIC_KEY
export const supabase = createClient(
    supabaseUrl, 
    supabaseAnontations
)