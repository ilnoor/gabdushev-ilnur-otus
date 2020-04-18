const TreeDrawer = function (outputFunc) {
  this.drawTree = function (tree) {
    outputNode(tree);
  };

  const output = outputFunc?outputFunc:console.log;

  const outputNode = function (node, level = 0, last, lastLeaf = true) {
    let pad = Array(level*2).fill("");
    let corner = '├';
    let pipe = '│';
    if (last) corner = '└';
    if (lastLeaf)  pipe = ' ';

    pad = pad.map((e, i, p) => {
      if (i === p.length - 2) {
        return corner;
      }
      if (i === p.length - 1) {
        return '-';
      }
      if (0 === (i+1)%2) {
        return ' ';
      }
      return pipe;
    });

    output(pad.join('') + node.name);
    if (node.items) {
      node.items.forEach((element, i, arr) => {
        outputNode(element, level + 1, i === arr.length - 1, lastLeaf && i === arr.length - 1 );
      });
    }
  }
};

exports.TreeDrawer = TreeDrawer;
