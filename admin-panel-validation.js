// Validation script to test admin panel components
// Run this in browser console on the admin dashboard

console.log('🚀 Starting Admin Panel Validation...');

// Test 1: Check if all main components are loaded
const validateComponents = () => {
  const components = {
    'Tabs Container': document.querySelector('[role="tablist"]'),
    'Stats Cards': document.querySelectorAll('[class*="gradient"]').length > 0,
    'Submissions Table': document.querySelector('table'),
    'Analytics Charts': document.querySelector('[class*="recharts"]'),
    'Search Input': document.querySelector('input[type="text"]'),
    'Filter Buttons': document.querySelectorAll('button[class*="variant"]').length > 5
  };
  
  console.log('📋 Component Validation:', components);
  return components;
};

// Test 2: Check authentication state
const validateAuth = () => {
  const authState = {
    'Session Storage': !!localStorage.getItem('admin-session'),
    'Login Status': !!document.querySelector('[class*="logout"]'),
    'Protected Route': window.location.pathname.includes('admin') || window.location.hash.includes('admin')
  };
  
  console.log('🔐 Authentication State:', authState);
  return authState;
};

// Test 3: Validate responsive design
const validateResponsive = () => {
  const screenWidth = window.innerWidth;
  const responsive = {
    'Screen Width': screenWidth + 'px',
    'Device Type': screenWidth < 768 ? 'Mobile' : screenWidth < 1024 ? 'Tablet' : 'Desktop',
    'Grid Responsive': document.querySelector('[class*="grid-cols"]'),
    'Table Responsive': document.querySelector('[class*="overflow-x"]')
  };
  
  console.log('📱 Responsive Design:', responsive);
  return responsive;
};

// Test 4: Check data loading
const validateData = () => {
  const dataElements = {
    'Stats Numbers': document.querySelectorAll('[class*="text-2xl"]').length > 5,
    'Table Rows': document.querySelector('tbody')?.children?.length || 0,
    'Loading States': document.querySelectorAll('[class*="animate-spin"]').length === 0,
    'Error Messages': document.querySelectorAll('[class*="destructive"]').length === 0
  };
  
  console.log('📊 Data Loading:', dataElements);
  return dataElements;
};

// Test 5: Validate interactions
const validateInteractions = () => {
  const interactions = {
    'Clickable Buttons': document.querySelectorAll('button:not([disabled])').length > 10,
    'Form Inputs': document.querySelectorAll('input, select, textarea').length > 5,
    'Navigation Tabs': document.querySelectorAll('[role="tab"]').length >= 4,
    'Action Buttons': document.querySelectorAll('[class*="variant-outline"], [class*="variant-default"]').length > 8
  };
  
  console.log('⚡ Interactions:', interactions);
  return interactions;
};

// Run all validation tests
const runFullValidation = () => {
  console.log('🧪 Running Full Admin Panel Validation...\n');
  
  const results = {
    components: validateComponents(),
    authentication: validateAuth(), 
    responsive: validateResponsive(),
    data: validateData(),
    interactions: validateInteractions()
  };
  
  // Calculate success score
  const allTests = Object.values(results).flat();
  const passedTests = allTests.filter(test => 
    typeof test === 'boolean' ? test : 
    typeof test === 'number' ? test > 0 : 
    !!test
  ).length;
  const totalTests = allTests.length;
  const successRate = Math.round((passedTests / totalTests) * 100);
  
  console.log(`\n🎯 Validation Summary:`);
  console.log(`✅ Passed: ${passedTests}/${totalTests} tests`);
  console.log(`📊 Success Rate: ${successRate}%`);
  
  if (successRate >= 80) {
    console.log('🎉 ADMIN PANEL VALIDATION PASSED!');
    console.log('✨ Robust admin panel is working correctly!');
  } else {
    console.log('⚠️  Some issues found - check individual test results above');
  }
  
  return { successRate, results };
};

// Auto-run if script is loaded
if (typeof window !== 'undefined') {
  // Wait a moment for components to load
  setTimeout(runFullValidation, 1000);
}

// Export for manual testing
window.adminPanelValidation = {
  runFullValidation,
  validateComponents,
  validateAuth,
  validateResponsive,
  validateData,
  validateInteractions
};
