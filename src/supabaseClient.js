// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nrenltimfmdlvvounpft.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yZW5sdGltZm1kbHZ2b3VucGZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3NjU5OTgsImV4cCI6MjA0NjM0MTk5OH0.w0ZufHX8k1oosvnBpXsrh1BJrO-Xc_E0jclJalnJTMk';
export const supabase = createClient(supabaseUrl, supabaseKey);
