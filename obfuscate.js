// obfuscate.js
// Scan src/ folder, obfuscate inline <script> blocks in every .html file
// Output goes to dist/ folder, keeping filenames the same.

const fs = require('fs');
const path = require('path');
const JavaScriptObfuscator = require('javascript-obfuscator');

const inputDir = 'src';
const outputDir = 'dist';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function obfuscateHtml(inputPath, outputPath) {
  let html = fs.readFileSync(inputPath, 'utf8');

  // Regex to match <script>...</script> (no src attribute)
  const scriptRegex = /(<script\b(?:(?!\bsrc\b)[\s\S])*?>)([\s\S]*?)(<\/script>)/gi;

  let changed = false;

  html = html.replace(scriptRegex, (fullMatch, openTag, innerJS, closeTag) => {
    if (!innerJS || !innerJS.trim()) return fullMatch;
    if (innerJS.includes('DO-NOT-OBFUSCATE')) return fullMatch;

    const obfOptions = {
      compact: true,
      controlFlowFlattening: true,
      deadCodeInjection: true,
      stringArray: true,
      simplify: true
    };

    try {
      const obfuscated = JavaScriptObfuscator.obfuscate(innerJS, obfOptions).getObfuscatedCode();
      const safeObf = obfuscated.replace(/<\/script>/gi, '<\\/script>');
      changed = true;
      return `${openTag}\n/* obfuscated */\n${safeObf}\n${closeTag}`;
    } catch (err) {
      console.error('Error obfuscating script block:', err);
      return fullMatch;
    }
  });

  fs.writeFileSync(outputPath, html, 'utf8');
  console.log(`✔ Obfuscated: ${inputPath} → ${outputPath} ${changed ? '(changed)' : '(no inline scripts found)'}`);
}

// Process all .html files in src/
fs.readdirSync(inputDir).forEach(file => {
  if (file.endsWith('.html')) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);
    obfuscateHtml(inputPath, outputPath);
  }
});
