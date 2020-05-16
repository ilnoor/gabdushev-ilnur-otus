exports.TreeDrawer = function (outputFunc) {
  this.drawTree = function (tree) {
    outputNode(tree);
  };
  const output = outputFunc?outputFunc:console.log;
  const outputNode = function (node, level = 0, last = false, pad = '') {
    output(pad + node.name);
    if (pad.length) {
      pad = pad.substr(0, pad.length-3) + (last?'   ':'│  ');
    }
    if (node.items) {
      node.items.forEach((element, i, arr) => {
        let addPad = (i === arr.length - 1?'└':'├') + '- ' ;
        outputNode(element, level + 1, i === arr.length - 1, pad + addPad);
      });
    }
  }
};
