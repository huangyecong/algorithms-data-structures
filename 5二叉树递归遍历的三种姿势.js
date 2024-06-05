import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
// 二叉树递归遍历的三种姿势

//先序遍历
const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D"
    },
    right: {
      val: "E"
    }
  },
  right: {
    val: "C",
    right: {
      val: "F"
    }
  }
};

// 先序遍历
console.log("-------------------------------先序遍历------------------------");
function preorder(root) {
  if (!root) {
    return;
  }
  console.log("先序遍历-当前遍历的结点值是：", root.val);
  preorder(root.left);
  preorder(root.right);
}

preorder(root);

// 中序遍历
console.log("-------------------------------中序遍历------------------------");
function inorder(root) {
  if (!root) {
    return;
  }
  inorder(root.left);
  console.log("中序遍历-当前遍历的结点值是：", root.val);
  inorder(root.right);
}

inorder(root);

// 后序遍历
console.log("-------------------------------后序遍历------------------------");
function postorder(root) {
  if (!root) {
    return;
  }
  postorder(root.left);
  postorder(root.right);
  console.log("后序遍历-当前遍历的结点值是：", root.val);
}

postorder(root);
