// swaps 2 nodes so binary search tree is valid
// binary search tree mans everything to left is less than node and everything to right
// is greater than node
// node is the position in the tree

class TreeNode {
    constructor(val) {
        this.val = (val===undefined ? null : val);
        this.left; //= (left===undefined ? null : left);
        this.right; // = (right===undefined ? null : right);
    }
}

var constructTree = function() {
    var root = new TreeNode(2);
    root.left = new TreeNode(3);
    root.right = new TreeNode(1);
    //root.right.left = new TreeNode(2);
    //root.right.right= new TreeNode(10);

    return root;
}
 var fails = [];
var recoverTree = function(root, min, max) {
    if(!root) return

    if(min && root.val <= min.val) {
        if(fails[0]) {
            fails[1] = root
        return
        }
        else {
            fails[0] = root;
            fails[1] = min;
        }
    }

    if(max && root.val >= max.val) {
        if(fails[0]) {
            fails[1] = root;
            return
        }
        else {
            fails[0] = root;
            fails[1] = max;
        }
       }

      recoverTree(root.left, min, root);
      recoverTree(root.right, root, max);

      return
};
var root = constructTree()
recoverTree(root);
var temp = fails[0]
fails[0].val = fails[1].val
fails[1].val = temp.val
console.log(root);