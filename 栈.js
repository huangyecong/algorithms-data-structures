// 栈（后进先出） push pop
const stack = []

stack.push('东北大板')
stack.push('可爱的')
stack.push('巧乐兹')
stack.push('冰工厂')
stack.push('光明奶砖')

while (stack.length) {
  const top = stack[stack.length - 1]
  console.log('现在取出的冰淇淋是：', top)
  stack.pop()
}

// 队列（先进先出）push shift
const queue = []
queue.push('小册一姐')
queue.push('小册二姐')
queue.push('小册三姐')

while (queue.length) {
  const top = queue[0]
  console.log(top, '取餐')
  queue.shift()
}

// 链表
// {
//   val:1,
//   next:{
//     val:2,
//     next:...
//   }
// }
function ListNode(val) {
  this.val = val
  this.next = null
}

const node1 = new ListNode(1)
node1.next = new ListNode(2)

// 链表元素add
const node3 = new ListNode(3)
node3.next = node1.next
node1.next = node3

// delete
node1.next = node3.next

// 反转链表
function reverseList(head) {
  if (!head || !head.next) {
    return head
  }
  let beg = null
  let mid = head
  let end = head.next

  while (mid) {
    //修改 mid 所指节点的指向
    mid.next = beg
    //此时判断 end 是否为 NULL，如果成立则退出循环
    if (end == null) {
      break
    }
    //整体向后移动 3 个指针
    beg = mid
    mid = end
    end = end.next
  }
  //最后修改 head 头指针的指向
  head = mid
  return head
}

// 二叉树
const root = {
  val: 'A',
  left: {
    val: 'B',
    left: {
      val: 'D',
    },
    right: {
      val: 'E',
    },
  },
  right: {
    val: 'C',
    left: {
      val: 'F',
    },
  },
}

// 先序遍历
function preorder(root) {
  if (!root) {
    return
  }

  console.log('当前遍历的结点是：', root.val)
  preorder(root.left)
  preorder(root.right)
}
console.log('------------先序遍历-------')
preorder(root)


// 中序遍历
function inorder(root){
  if(!root){
    return
  }
  inorder(root.left)
  console.log('当前遍历的结点是：',root.val)
  inorder(root.right)
}
console.log('-----------------中序遍历---------')
inorder(root)

// 后序遍历
function postorder(root){
  if(!root){
    return
  }

  postorder(root.right)
  postorder(root.left)
  console.log('当前遍历的结点是：',root.val)
}
console.log('-----------------后序遍历---------')
postorder(root)