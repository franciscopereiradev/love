import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient('https://dxqpklqekjbdfovaspej.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNDkxOTUyNywiZXhwIjoxOTUwNDk1NTI3fQ.8nXAKrvcNuvnLVbiNov3gSqbVsu2LIzz73plgmFNTkQ')