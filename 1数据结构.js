import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 111
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// 栈 出栈
const stack = [];

stack.push("东北大板");
stack.push("可爱多");
stack.push("巧乐兹");
stack.push("冰工厂");
stack.push("光明奶砖");

while (stack.length) {
  const top = stack[stack.length - 1];
  console.log("现在取出的冰淇淋是", top);
  stack.pop();
}

// 队列 出队列

const queue = [];
queue.push("小册一姐");
queue.push("小册二姐");
queue.push("小册三姐");
while (queue.length) {
  const top = queue[0];
  console.log(top, "出餐");
  queue.shift();
}

// 链表
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const node1 = new ListNode(1);
node1.next = new ListNode(2);
console.log("链表=", node1);

// 链表的插入
const node3 = new ListNode(3);
// 把node3的next指针指向node2(即node1.next)
node3.next = node1.next;
node1.next = node3;
console.log("链表的插入=", node1);

// 链表的删除(定位目标结点的前驱结点)
// node1.next = node3.next;
// 也可以只使用一个指针定位目标结点的前驱结点（利用node1可以定位到node3）
const target = node1.next;
node1.next = target.next;
console.log("链表的删除=", node1);

// 树-二叉树
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const tree1 = TreeNode(1);
console.log("二叉树=", tree1);
