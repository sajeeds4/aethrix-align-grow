// Test all pages for 404 errors
const pages = [
  // Main pages
  '/',
  '/services',
  '/about',
  '/careers',
  '/consultation',
  '/industries',
  '/case-studies',
  
  // ERP pages
  '/erp',
  '/erp/overview',
  '/erp/odoo',
  '/erp/migration',
  '/erp/customization',
  
  // Development pages
  '/development',
  '/development/overview',
  '/development/web',
  '/development/mobile',
  '/development/enterprise',
  '/development/ecommerce',
  
  // Cloud pages
  '/cloud',
  '/cloud/infrastructure',
  '/cloud/migration',
  '/cloud/devops',
  '/cloud/security',
  
  // AI pages
  '/ai',
  '/ai/ml',
  '/ai/automation',
  '/ai/chatbots',
  '/ai/analytics',
  
  // Privacy & Legal pages
  '/privacy',
  '/terms',
  '/privacy/cookies',
  '/privacy/data-protection',
  '/privacy/accessibility',
  
  // Other pages
  '/service-configurator',
  '/implementation-methodology',
  '/contact'
];

console.log('🔍 Checking all website pages for 404 errors...\n');
console.log(`Total pages to check: ${pages.length}\n`);

const baseUrl = 'http://localhost:5173';

async function checkPage(url) {
  try {
    const response = await fetch(baseUrl + url);
    const status = response.status;
    const ok = response.ok;
    
    return {
      url,
      status,
      ok,
      statusText: ok ? '✅ OK' : `❌ ${status}`
    };
  } catch (error) {
    return {
      url,
      status: 'ERROR',
      ok: false,
      statusText: `❌ ${error.message}`
    };
  }
}

async function checkAllPages() {
  console.log('Starting page checks...\n');
  
  const results = [];
  
  for (const page of pages) {
    const result = await checkPage(page);
    results.push(result);
    
    console.log(`${result.statusText} ${result.url}`);
  }
  
  console.log('\n' + '='.repeat(50));
  console.log('SUMMARY');
  console.log('='.repeat(50) + '\n');
  
  const working = results.filter(r => r.ok).length;
  const broken = results.filter(r => !r.ok).length;
  
  console.log(`✅ Working pages: ${working}/${pages.length}`);
  console.log(`❌ Broken pages: ${broken}/${pages.length}\n`);
  
  if (broken > 0) {
    console.log('Broken pages:');
    results.filter(r => !r.ok).forEach(r => {
      console.log(`  - ${r.url} (${r.status})`);
    });
  } else {
    console.log('🎉 All pages are working correctly!');
  }
}

checkAllPages();
