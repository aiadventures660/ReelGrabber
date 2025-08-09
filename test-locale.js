const fs = require('fs');
const path = require('path');

console.log('Starting locale build...');

// Simple test
const messagesPath = './src/features/i18n/messages/en-US/layouts/home.json';
const localesPath = './src/features/i18n/locales/en-US.json';

console.log('Checking paths...');
console.log('Messages path exists:', fs.existsSync(messagesPath));
console.log('Locales path exists:', fs.existsSync(localesPath));

if (fs.existsSync(messagesPath)) {
  const homeMessages = JSON.parse(fs.readFileSync(messagesPath, 'utf-8'));
  console.log('Home messages:', JSON.stringify(homeMessages, null, 2));
}
