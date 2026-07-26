import { mainServices, citiesList, industriesList, globalFaqs } from '../data/siteData';

function countWords(str: any): number {
  if (!str) return 0;
  if (Array.isArray(str)) return str.map(countWords).reduce((a, b) => a + b, 0);
  if (typeof str === 'object') return Object.values(str).map(countWords).reduce((a, b) => a + b, 0);
  return String(str).replace(/<[^>]+>/g, ' ').split(/\s+/).filter(w => w.length > 0).length;
}

console.log('=== REAL RENDERED CONTENT WORD COUNT REPORT ===\n');

console.log('--- MAIN SERVICES ---');
for (const s of mainServices) {
  const words = countWords(s);
  console.log(`${s.title} (${s.slug}): ~${words} words`);
}

console.log('\n--- CITY LANDING PAGES ---');
for (const c of citiesList) {
  const words = countWords(c);
  console.log(`Website Dev in ${c.cityName} (${c.slug}): ~${words} words`);
}

console.log('\n--- INDUSTRY PAGES ---');
for (const ind of industriesList) {
  const words = countWords(ind);
  console.log(`${ind.industryName} (${ind.slug}): ~${words} words`);
}

console.log('\n--- GLOBAL FAQS ---');
console.log(`Global FAQs: ~${countWords(globalFaqs)} words`);
