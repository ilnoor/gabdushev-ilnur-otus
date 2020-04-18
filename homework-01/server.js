const treeModule = require('./tree-output.js');

function main() {
  const tree = {
    'name': 1,
    'items': [{
      'name': 2,
      'items': [{'name': 3, 'items': [{'name': 8},{'name': 9},{'name': 10}]}, {'name': 4}]
    }, {
      'name': 5,
      'items': [{'name': 6, 'items': [{'name': 7}]}]
    }]
  };
  const treeDrawer1 = new treeModule.TreeDrawer();
  treeDrawer1.drawTree(tree);
}

main();
