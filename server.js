const treeModule = require('./tree-output.js');
const path = require('path');
const fs = require('fs');

function getDirObj(dir, maxDepth, currentDepth = 1) {
  let result = {name: path.basename(dir), items: []};
  if (maxDepth && currentDepth > maxDepth) return result;
  const dirents = fs.readdirSync(dir, {withFileTypes: true});
  for (let i = 0; i < dirents.length; i++) {
    if (dirents[i].isDirectory()) {
      result.items.push(getDirObj(path.resolve(dir, dirents[i].name), maxDepth, currentDepth + 1));
    } else {
      result.items.push({name: path.basename(dirents[i].name)})
    }
  }
  return result;
}

function main() {
  const pathToDraw = process.argv[2];
  if (!pathToDraw) {
    throw new Error('path must be specified');
  }
  let maxDepth = 0;
  for (let i = 3; i < process.argv.length - 1; i++) {
    if ('--depth' === process.argv[i] || '-d' === process.argv[i]) {
      maxDepth = process.argv[i + 1];
    }
  }
  const treeDrawer1 = new treeModule.TreeDrawer();
  treeDrawer1.drawTree(getDirObj(pathToDraw, maxDepth));
}

main();
