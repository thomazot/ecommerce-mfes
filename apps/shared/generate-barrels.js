const fs = require('fs');
const path = require('path');

function generateBarrel(dir) {
  const files = fs
    .readdirSync(dir)
    .filter(
      (f) =>
        (f.endsWith('.ts') || f.endsWith('.tsx')) && !f.startsWith('index.'),
    );
  // Sempre cria index.ts, mesmo se vazio
  let exports = files
    .map((f) => `export * from './${f.replace(/\.tsx?$/, '')}';`)
    .join('\n');
  if (!exports) exports = 'export {};';
  fs.writeFileSync(path.join(dir, 'index.ts'), exports);
}

function walk(dir) {
  generateBarrel(dir);
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      walk(path.join(dir, entry.name));
    }
  }
}

const baseDirs = [
  path.join(__dirname, 'src/components'),
  path.join(__dirname, 'src/schemas'),
  path.join(__dirname, 'src/services'),
];

baseDirs.forEach(walk);

// Gera src/index.ts exportando os módulos principais
const srcDir = path.join(__dirname, 'src');
let mainExports = ['components', 'schemas', 'services']
  .filter((dir) => fs.existsSync(path.join(srcDir, dir)))
  .map((dir) => `export * from './${dir}';`)
  .join('\n');
if (!mainExports) mainExports = 'export {};';
fs.writeFileSync(path.join(srcDir, 'index.ts'), mainExports);
