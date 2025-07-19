const fs = require('fs');
const path = require('path');

function shouldIncludeFile(fileName) {
  const isTsFile = /\.(ts|tsx)$/.test(fileName);
  const ignorePatterns = ['.test.', '.variants.', '.reduce.', '.helpers.'];
  const isIgnored = ignorePatterns.some((pattern) =>
    fileName.includes(pattern),
  );
  const isIndex = /^index\.(ts|tsx)$/.test(fileName);
  return isTsFile && !isIgnored && !isIndex;
}

function generateBarrel(dir) {
  const files = fs.readdirSync(dir).filter(shouldIncludeFile);

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
  path.join(__dirname, 'src/commons'),
  path.join(__dirname, 'src/components'),
  path.join(__dirname, 'src/schemas'),
  path.join(__dirname, 'src/services'),
  path.join(__dirname, 'src/containers'),
  path.join(__dirname, 'src/utils'),
  path.join(__dirname, 'src/context'),
];

baseDirs.forEach(walk);

// Gera src/index.ts exportando os módulos principais
const srcDir = path.join(__dirname, 'src');

let mainExports = [
  'commons',
  'components',
  'schemas',
  'services',
  'containers',
  'utils',
  'context',
  'hooks',
]
  .filter((dir) => {
    const fullDir = path.join(srcDir, dir);
    return fs.existsSync(fullDir) && fs.statSync(fullDir).isDirectory();
  })
  .map((dir) => `export * from './${dir}';`)
  .join('\n');

if (!mainExports) mainExports = 'export {};';

fs.writeFileSync(path.join(srcDir, 'index.ts'), mainExports);
