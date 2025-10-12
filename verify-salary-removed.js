import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://faoiscbbfjtvpywmddpn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhb2lzY2JiZmp0dnB5d21kZHBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5NDgyNzUsImV4cCI6MjA3NDUyNDI3NX0.crp_UbafreGGA_9H9berxsNYzUSijPzOuAQtC6jT044';

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkJob() {
  console.log('🔍 Checking Jr Inside Sales Representative job...\n');
  
  const { data: jobs, error } = await supabase
    .from('job_listings')
    .select('title, salary_range')
    .eq('title', 'Jr Inside Sales Representative');
  
  if (error) {
    console.error('❌ Error:', error);
    return;
  }
  
  if (jobs && jobs.length > 0) {
    jobs.forEach(job => {
      console.log(`✅ Job: ${job.title}`);
      console.log(`   Salary: ${job.salary_range || '(empty - removed successfully!)'}`);
    });
  } else {
    console.log('❌ Job not found');
  }
}

checkJob();
