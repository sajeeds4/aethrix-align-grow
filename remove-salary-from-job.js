import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://faoiscbbfjtvpywmddpn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhb2lzY2JiZmp0dnB5d21kZHBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5NDgyNzUsImV4cCI6MjA3NDUyNDI3NX0.crp_UbafreGGA_9H9berxsNYzUSijPzOuAQtC6jT044';

const supabase = createClient(supabaseUrl, supabaseKey);

async function removeSalary() {
  console.log('🔍 Finding job with salary $40,000 - $55,000...');
  
  // Find the job
  const { data: jobs, error: fetchError } = await supabase
    .from('job_listings')
    .select('*')
    .ilike('salary_range', '%40,000%55,000%');
  
  if (fetchError) {
    console.error('❌ Error fetching jobs:', fetchError);
    return;
  }
  
  if (!jobs || jobs.length === 0) {
    console.log('❌ No job found with that salary range');
    return;
  }
  
  console.log(`\n✅ Found ${jobs.length} job(s):`);
  jobs.forEach(job => {
    console.log(`\nJob: ${job.title}`);
    console.log(`Current Salary: ${job.salary_range}`);
  });
  
  // Update each job to remove salary
  for (const job of jobs) {
    console.log(`\n🔄 Updating job: ${job.title}...`);
    
    const { data, error } = await supabase
      .from('job_listings')
      .update({ 
        salary_range: '' // Remove salary
      })
      .eq('id', job.id)
      .select();
    
    if (error) {
      console.error('❌ Error updating job:', error);
    } else {
      console.log('✅ Salary removed successfully!');
      if (data && data[0]) {
        console.log('New Salary:', data[0].salary_range || '(empty)');
      }
    }
  }
  
  console.log('\n✨ Done!');
}

removeSalary();
