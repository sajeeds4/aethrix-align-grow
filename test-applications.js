import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://faoiscbbfjtvpywmddpn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhb2lzY2JiZmp0dnB5d21kZHBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5NDgyNzUsImV4cCI6MjA3NDUyNDI3NX0.crp_UbafreGGA_9H9berxsNYzUSijPzOuAQtC6jT044';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testApplicationsFetch() {
  console.log('🔍 Fetching all job applications...\n');
  
  const { data, error } = await supabase
    .from('job_applications')
    .select(`
      id,
      full_name,
      email,
      status,
      created_at,
      job_listings (
        title
      )
    `)
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('❌ Error fetching applications:', error);
    return;
  }
  
  console.log(`✅ Found ${data.length} application(s):\n`);
  
  if (data.length === 0) {
    console.log('⚠️  No applications found. Try submitting one from the careers page.');
  } else {
    data.forEach((app, index) => {
      console.log(`${index + 1}. ${app.full_name}`);
      console.log(`   Email: ${app.email}`);
      console.log(`   Job: ${app.job_listings?.title || 'Unknown'}`);
      console.log(`   Status: ${app.status}`);
      console.log(`   Submitted: ${new Date(app.created_at).toLocaleString()}`);
      console.log('');
    });
  }
}

testApplicationsFetch();
