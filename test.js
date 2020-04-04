class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

generateListNode = (list) => {
  const [ele] = list;
  //create starting point of node list
  const startpnt = new ListNode(ele);
  let current = startpnt;
  for (let i = 1; i < current.length; i++) {
    //update next with the new list node
    //set the current to the new next
    current = current.next = new ListNode(list[i]);
  }
  return startpnt;
};
const list1 = generateListNode([2, 4, 3]);
const list = generateListNode([5, 6, 4]);
console.log(startpnt);
