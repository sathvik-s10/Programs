// copied solution
//https://leetcode.com/problems/validate-binary-search-tree/
//checks if tree given is valid binary search tree(everything to left is less than node
// everything to right is greater than node)
var isValidBST=function(root, min=null, max=null) {
    if(!root) return true;
    if(min && root.val<=min.val) return false;
    if(max && root.val>=max.val) return false;
    return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
}