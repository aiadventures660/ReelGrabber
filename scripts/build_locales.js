const fs = require('fs');
const path = require('path');

// Configuration
const MESSAGES_DIR = './src/features/i18n/messages';
const LOCALES_DIR = './src/features/i18n/locales';
const LOCALES = ['en-US', 'es-ES', 'de-DE', 'fr-FR', 'ru-RU'];

// Function to recursively build nested object from directory structure
function buildMessagesFromDirectory(dirPath) {
  const messages = {};
  
  try {
    const files = fs.readdirSync(dirPath, { withFileTypes: true });
    
    for (const file of files) {
      const filePath = path.join(dirPath, file.name);
      
      if (file.isDirectory()) {
        // Recursively process subdirectories
        messages[file.name] = buildMessagesFromDirectory(filePath);
      } else if (file.isFile() && file.name.endsWith('.json')) {
        // Read and parse JSON files
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const fileName = path.basename(file.name, '.json');
        messages[fileName] = JSON.parse(fileContent);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error);
  }
  
  return messages;
}

// Main function
function buildLocales() {
  console.log('🔄 Building locale files...');
  
  // Ensure output directory exists
  if (!fs.existsSync(LOCALES_DIR)) {
    fs.mkdirSync(LOCALES_DIR, { recursive: true });
  }
  
  // Process each locale
  for (const locale of LOCALES) {
    const localeDir = path.join(MESSAGES_DIR, locale);
    
    if (!fs.existsSync(localeDir)) {
      console.warn(`⚠️  Locale directory not found: ${localeDir}`);
      continue;
    }
    
    console.log(`📁 Processing locale: ${locale}`);
    
    // Build the nested messages object
    const messages = buildMessagesFromDirectory(localeDir);
    
    // Write to output file
    const outputFile = path.join(LOCALES_DIR, `${locale}.json`);
    fs.writeFileSync(outputFile, JSON.stringify(messages, null, 2), 'utf-8');
    
    console.log(`✅ Generated: ${outputFile}`);
  }
  
  console.log('🎉 Locale files built successfully!');
}

// Run the script
if (require.main === module) {
  buildLocales();
}

module.exports = { buildLocales };
