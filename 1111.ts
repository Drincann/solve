function maxDepthAfterSplit(seq: string): number[] {
  let ans = new Array(seq.length).fill(undefined);
  let deep = 0;
  for(let i = 0; i < seq.length; ++i) {
    if(seq[i] === '(') {
      ++deep;
      ans[i] = deep & 1;
    } else {
      --deep;
      ans[i] = (deep + 1) & 1;
    }
  }
  return ans;
};
