import { supabase } from '@/integrations/supabase/client';

export const testDatabaseConnection = async () => {
  try {
    console.log('Testing database connection...');
    
    // Test basic connection
    const { data: testData, error: testError } = await supabase
      .from('contact_submissions')
      .select('id')
      .limit(1);

    if (testError) {
      console.error('Database connection failed:', testError);
      return { success: false, error: testError.message };
    }

    console.log('Database connection successful!');

    // Test insert capability
    const testSubmission = {
      name: 'Test User',
      email: 'test@example.com',
      company: 'Test Company',
      message: 'This is a test submission - can be deleted',
      status: 'test'
    };

    const { data: insertData, error: insertError } = await supabase
      .from('contact_submissions')
      .insert([testSubmission])
      .select('id')
      .single();

    if (insertError) {
      console.error('Database insert failed:', insertError);
      return { success: false, error: insertError.message };
    }

    console.log('Database insert successful!', insertData);

    // Clean up test data
    if (insertData?.id) {
      await supabase
        .from('contact_submissions')
        .delete()
        .eq('id', insertData.id);
      console.log('Test data cleaned up');
    }

    return { success: true };
  } catch (error) {
    console.error('Database test error:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

// Run test when this module is imported
if (typeof window !== 'undefined') {
  // Only run in browser environment
  testDatabaseConnection().then(result => {
    if (result.success) {
      console.log('✅ Database is ready for use!');
    } else {
      console.log('❌ Database not ready, using local storage fallback');
    }
  });
}
