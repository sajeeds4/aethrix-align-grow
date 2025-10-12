import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://faoiscbbfjtvpywmddpn.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhb2lzY2JiZmp0dnB5d21kZHBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5NDgyNzUsImV4cCI6MjA3NDUyNDI3NX0.crp_UbafreGGA_9H9berxsNYzUSijPzOuAQtC6jT044";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function checkJobSalary() {
    console.log('🔍 Checking Job Listings in Database...\n');
    
    try {
        const { data: jobs, error } = await supabase
            .from('job_listings')
            .select('id, title, salary_range, updated_at, is_active')
            .order('updated_at', { ascending: false });
        
        if (error) {
            console.error('❌ Error fetching jobs:', error.message);
            return;
        }
        
        if (!jobs || jobs.length === 0) {
            console.log('❌ No jobs found in database!');
            return;
        }
        
        console.log(`✅ Found ${jobs.length} job(s):\n`);
        
        jobs.forEach((job, index) => {
            console.log(`${index + 1}. ${job.title}`);
            console.log(`   ID: ${job.id}`);
            console.log(`   Salary: ${job.salary_range || '(not set)'}`);
            console.log(`   Active: ${job.is_active ? 'Yes' : 'No'}`);
            console.log(`   Last Updated: ${new Date(job.updated_at).toLocaleString()}`);
            console.log('');
        });
        
        // Check active jobs specifically
        const activeJobs = jobs.filter(j => j.is_active);
        console.log(`\n📊 Summary:`);
        console.log(`   Total Jobs: ${jobs.length}`);
        console.log(`   Active Jobs: ${activeJobs.length}`);
        console.log(`   Inactive Jobs: ${jobs.length - activeJobs.length}`);
        
    } catch (err) {
        console.error('❌ Fatal error:', err);
    }
}

checkJobSalary().then(() => {
    console.log('\n✅ Check complete!');
    process.exit(0);
}).catch(err => {
    console.error('❌ Fatal error:', err);
    process.exit(1);
});
