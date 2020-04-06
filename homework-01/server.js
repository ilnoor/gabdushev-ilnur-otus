function main() {
  const tree = {
    "name": 1,
    "items": [{
      "name": 2,
      "items": [{"name": 3, "items": [{"name": 8},{"name": 9},{"name": 10}]}, {"name": 4}]
    }, {
      "name": 5,
      "items": [{"name": 6, "items": [{"name": 7}]}]
    }]
  };
  outputNode(tree);
}

function outputNode(node, level = 0, last, lastLeaf = true) {
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

  console.log(pad.join('') + node.name);
  if (node.items) {
    node.items.forEach((element, i, arr) => {
      outputNode(element, level + 1, i === arr.length - 1, lastLeaf && i === arr.length - 1 );
    });
  }
}

main();
