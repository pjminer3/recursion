// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  node = node || document;
  let result = [];
  
  function treeDive(className, node) {
    let nodeChildren = node.children;
    if (nodeChildren.length === 0) { return; }
    for (let i = 0; i < nodeChildren.length; i++ ) {
      if (nodeChildren[i].classList.contains(className)) { result.push(nodeChildren[i]); }
      if (nodeChildren[i].children.length > 0) {
        treeDive(className, nodeChildren[i]); 
      } 
    }
  }

  treeDive(className, node);
  return result;
};
