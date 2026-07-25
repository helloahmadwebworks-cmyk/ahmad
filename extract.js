const fs = require('fs');
const child_process = require('child_process');
const path = require('path');

try {
  const docxPath = 'C:\\Users\\ahmad\\Downloads\\AhmadWebWorks_FULL_SEO_Content.docx';
  const zipPath = path.resolve('temp_content.zip');
  const tempExtract = path.resolve('.docx_temp');

  if (fs.existsSync(tempExtract)) {
    fs.rmSync(tempExtract, { recursive: true, force: true });
  }
  if (fs.existsSync(zipPath)) {
    fs.unlinkSync(zipPath);
  }

  fs.copyFileSync(docxPath, zipPath);

  child_process.execSync(`powershell -Command "Expand-Archive -Path '${zipPath}' -DestinationPath '${tempExtract}' -Force"`);
  const xml = fs.readFileSync(path.join(tempExtract, 'word', 'document.xml'), 'utf8');
  
  const text = xml
    .replace(/<\/w:p>/g, '\n\n')
    .replace(/<w:tab\/>/g, '\t')
    .replace(/<w:br\/>/g, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");

  fs.writeFileSync('extracted_seo_content.txt', text);
  console.log('SUCCESS: Extracted SEO content. Length:', text.length);

  // Clean up
  fs.unlinkSync(zipPath);
  fs.rmSync(tempExtract, { recursive: true, force: true });
} catch (err) {
  console.error('Error extracting docx:', err);
}
