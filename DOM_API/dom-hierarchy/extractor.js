// BEGIN
export default (root) => {
  const children = Array.from(root.parentNode.body.children);
  return children
    .filter((element) => element.tagName === 'P')
    .map((element) => element.innerHTML.trim());
};
// END