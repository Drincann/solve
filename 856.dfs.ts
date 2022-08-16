interface node {
  val: string;
  children: node[];
  score: number;
}
function scoreOfParentheses(s: string): number {
  const splitByGroups = (s: string): string[] => {
    let left = 0, lastIndex = 0, groups: string[] = [];
    for (let i = 0; i < s.length; ++i) {
      const char = s[i];
      if (char === '(') ++left;
      else /* char === ')' */ --left;

      if (left === 0) {
        groups.push(s.slice(lastIndex, i + 1));
        lastIndex = i + 1;
      }
    }
    return groups;
  };

  const bulidTree = (s: string): node => {
    const newNode: node = { val: s, children: [], score: s === '()' ? 1 : 0 };
    const children = splitByGroups(s);
    if (children.length === 1) {
      if (children[0] === '()') return newNode;
      children[0] = children[0].slice(1, -1)
    };

    for (const child of children) {
      newNode.children.push(bulidTree(child));
    }
    return newNode;
  };

  const calScoreDfs = (root: node): number => {
    root.children.forEach(node => calScoreDfs(node));
    if (root.children.length === 0) return root.score;
    if (root.children.length === 1) {
      root.score = 2 * root.children[0].score;
    } else {
      root.score = root.children.reduce((sum, node) => sum + node.score, 0);
    }
    return root.score;
  };

  return calScoreDfs(bulidTree(s));
};
