/**
 * @url https://www.codewars.com/kata/56ef9790740d30a7ff000199/train/javascript
 */

function arrayGet(tree, result) {
  if (!tree || tree.length === 0) return result;

  tree.forEach((node) => {
    if (node) result.push(node.data);
  });

  const nextLevelTree = tree.flatMap((node) => node.children);
  return arrayGet(nextLevelTree, result);
}

function treeToArray(tree) {
  if (tree.length === 0) return tree;
  return arrayGet(tree.children, [tree.data]);
}

class Node {
  constructor(data, children = []) {
    this.data = data;
    this.children = children;
  }
}

console.log(treeToArray([]));

console.log(
  treeToArray({
    data: 1,
    children: [
      {
        data: 2,
        children: [
          {
            data: 3,
            children: [],
          },
          {
            data: 4,
            children: [],
          },
          {
            data: 5,
            children: [],
          },
        ],
      },
      {
        data: 3,
        children: [
          {
            data: 7,
            children: [],
          },
        ],
      },
    ],
  })
); //[1, 2, 3, 3, 4, 5, 7];
