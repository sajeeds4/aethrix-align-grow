import { supabase } from './src/integrations/supabase/client.js';

console.log('🔍 Testing database connection and job_listings table...\n');

async function testDatabase() {
  try {
    // Test basic connection
    console.log('1️⃣ Testing Supabase connection...');
    const { data: connectionTest, error: connectionError } = await supabase.from('job_listings').select('count');
    
    if (connectionError) {
      console.error('❌ Connection failed:', connectionError.message);
      
      if (connectionError.message.includes('relation "job_listings" does not exist')) {
        console.log('\n📋 SOLUTION: You need to create the job_listings table!');
        console.log('1. Go to your Supabase dashboard: https://supabase.com/dashboard');
        console.log('2. Navigate to SQL Editor');
        console.log('3. Run the complete-database-setup.sql file');
        console.log('4. Or copy and paste the SQL commands from complete-database-setup.sql\n');
      }
      return;
    }
    
    console.log('✅ Supabase connection successful!');

    // Test reading job listings
    console.log('\n2️⃣ Testing job listings query...');
    const { data: jobs, error: jobsError } = await supabase
      .from('job_listings')
      .select('*')
      .eq('is_active', true);

    if (jobsError) {
      console.error('❌ Query failed:', jobsError.message);
      return;
    }

    console.log(`✅ Successfully fetched ${jobs?.length || 0} active job listings!`);
    
    if (jobs && jobs.length > 0) {
      console.log('\n📋 Sample jobs found:');
      jobs.slice(0, 3).forEach((job, index) => {
        console.log(`   ${index + 1}. ${job.title} - ${job.department} (${job.location})`);
      });
    } else {
      console.log('ℹ️ No job listings found. You can add them through the admin panel.');
    }

    // Test insert capability (for admin)
    console.log('\n3️⃣ Testing insert permissions...');
    const testJob = {
      title: 'Test Position - DELETE ME',
      department: 'Test',
      location: 'Test Location',
      employment_type: 'Full-time',
      description: 'This is a test job listing that should be deleted.',
      is_active: false,
      featured: false
    };

    const { data: insertedJob, error: insertError } = await supabase
      .from('job_listings')
      .insert([testJob])
      .select();

    if (insertError) {
      console.log('⚠️ Insert test failed (this is expected for anonymous users):', insertError.message);
      console.log('ℹ️ Admin operations require authentication through the admin panel.');
    } else {
      console.log('✅ Insert test successful! Cleaning up...');
      
      // Clean up test data
      if (insertedJob && insertedJob.length > 0) {
        await supabase
          .from('job_listings')
          .delete()
          .eq('id', insertedJob[0].id);
        console.log('🧹 Test data cleaned up.');
      }
    }

    console.log('\n🎉 Database test completed successfully!');
    console.log('🚀 Your job management system should work properly now.');
    console.log('📝 Visit /careers to see the public job listings');
    console.log('🔧 Visit /admin to manage job postings');

  } catch (error) {
    console.error('💥 Unexpected error:', error);
  }
}

testDatabase();
