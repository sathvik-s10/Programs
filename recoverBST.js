// swaps 2 nodes so binary search tree is valid
// binary search tree mans everything to left is less than node and everything to right
// is greater than node
// node is the position in the tree

class TreeNode {
    constructor(value) {
        this.value = (value===undefined ? null : value);
        this.left;//(left===undefined ? null : left);
        this.right;//(right===undefined ? null : right);
    }
}

var constructTree = function() {
    var root = new TreeNode(2);
    root.left = new TreeNode(3);
    root.right = new TreeNode(6);
    root.right.right= new TreeNode(10);

    return root;
}

var recoverTree = function(root, min, max) {
    if(!root)return true;

    if(min && root.value <= min.value) {
       var swap = root.value;
        root.value=min.value;
        min.value = root.value;
        return root;
    }

    if(max && root.value >= max.value) {
       var swap=root.value;
        root.value=max.value;
        max.value = swap;
        return root;
       }

      recoverTree(root.left, min, root.value);
      recoverTree(root.right, root.value, max);

    return true;
};

var root = constructTree();
recoverTree(root);
console.log(root);