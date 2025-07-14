const fs = require('fs');
const path = require('path');

function shouldIncludeFile(fileName) {
  const isTsFile = /\.(ts|tsx)$/.test(fileName);
  const isTestOrVariant = /\.test\.|\.variants\./i.test(fileName);
  const isIndex = /^index\.(ts|tsx)$/.test(fileName);
  return isTsFile && !isTestOrVariant && !isIndex;
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
  path.join(__dirname, 'src/components'),
  path.join(__dirname, 'src/schemas'),
  path.join(__dirname, 'src/services'),
  path.join(__dirname, 'src/containers'),
  path.join(__dirname, 'src/utils'),
];

baseDirs.forEach(walk);

// Gera src/index.ts exportando os módulos principais
const srcDir = path.join(__dirname, 'src');

let mainExports = ['components', 'schemas', 'services', 'containers', 'utils']
  .filter((dir) => {
    const fullDir = path.join(srcDir, dir);
    return fs.existsSync(fullDir) && fs.statSync(fullDir).isDirectory();
  })
  .flatMap((dir) => {
    const fullDir = path.join(srcDir, dir);
    return fs
      .readdirSync(fullDir)
      .filter(shouldIncludeFile)
      .map((file) => {
        const name = file.replace(/\.(ts|tsx)$/, '');
        return `export * from './${dir}/${name}';`;
      });
  })
  .join('\n');

if (!mainExports) mainExports = 'export {};';

fs.writeFileSync(path.join(srcDir, 'index.ts'), mainExports);
