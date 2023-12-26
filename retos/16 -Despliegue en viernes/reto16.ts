function transformTree(tree) {
  function insertInTree(tree, i = 0) {
    let root = null;

    if (i < tree.length && tree[i] != null) {
      root = {
        value: tree[i],
        left: insertInTree(tree, 2 * i + 1),
        right: insertInTree(tree, 2 * i + 2),
      };
    }

    return root;
  }

  const newTree = insertInTree(tree);

  return newTree;
}