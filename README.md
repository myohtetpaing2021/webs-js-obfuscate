
# ⚡ Repo Structure (ပြင်ဆင်ပြီးအသုံးပြုဖို့)
```/
├─ src/
│   ├─ p2p-tracker.html
│   ├─ another.html
│   └─ more-files.html
├─ dist/                 # output files will be generated here
├─ package.json
├─ obfuscate.js
└─ .github/
   └─ workflows/
      └─ obfuscate.yml

````

---

## 🌟 Features
- ➡️ အခုနောက်တစ်ခါ မင်း HTML အသစ်တစ်ခု src/newpage.html ထည့်မယ်ဆိုရင် Action run အပြီး dist/newpage.html အဖြစ် အလိုအလျောက် ထွက်လာမယ်။

---

### Step 1: package.json (script ပြန်ပြင်)
```bash
{
  "name": "p2p-obfuscator",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "obfuscate": "node obfuscate.js"
  },
  "dependencies": {
    "javascript-obfuscator": "^4.1.1"
  }
}

```

### Step 2: obfuscate.js (multi-file version)

```bash
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
```

### Step 3: GitHub Action Workflow (.github/workflows/obfuscate.yml)

```bash
name: Obfuscate HTML scripts

on:
  push:
    branches: [ main, master ]
  workflow_dispatch:

permissions:
  contents: write

jobs:
  obfuscate:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repo
        uses: actions/checkout@v4
        with:
          persist-credentials: true

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm install --no-audit --no-fund

      - name: Run obfuscator
        run: npm run obfuscate

      - name: Commit & push obfuscated output (if changed)
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git add dist/*.html || true
          if ! git diff --cached --quiet; then
            git commit -m "chore: update obfuscated HTML files [skip ci]" || true
            git push
          else
            echo "No changes to commit"
          fi
```

### Step 4: အသုံးပြုနည်း

1. HTML ဖိုင်တွေကို src/ folder ထဲ ထည့်ပါ
2. Repo ကို push လိုက်ပါ
3. GitHub Actions run သွားပြီး → dist/ ထဲမှာ အကုန် output files commit ပြန်ထည့်ပေးမယ်

---

မင်းတချို့ဖိုင်တွေကို encode မလုပ်ချင်ဘဲ ANY ထားချင်ရင် marker သုံးလို့ရတယ် (DO-NOT-OBFUSCATE)။
ဥပမာ: html
```bash
<script>
/* DO-NOT-OBFUSCATE */
console.log("this block will not be obfuscated");
</script>
```

> 👉 မင်းအတွက် ဒီ setup က multi-file အတွက် အဆင်ပြေသွားမယ်**.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👤 Author

Made with ❤️ by [M4K](https://t.me/shayshayblack)

---



