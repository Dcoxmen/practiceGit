//Defined class node
class ListNode {
  //Constructor
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
//create the startpnt (starting point of the node list)
generateListNode = (list) => {
  const [ele] = list;
  const startpnt = new ListNode(ele);
  let current = startpnt;
  for (let i = 1; i < list.length; i++) {
    //update the next with the new list node
    //set the current to the new next
    current = current.next = new ListNode(list[i]);
  }
  return startpnt;
};

const list1 = generateListNode([2, 4, 3]);
const list2 = generateListNode([5, 6, 4]);

const convertToValueList = (list) => {
  const res = [];
  //as long as the value "list" is not null it'll continue the loop
  //push the list.val to the result array
  do {
    res.push(list.val);
  } while ((list = list.next));
  return res;
};

const addTwoNumbers = function (l1, l2) {
  //Convert the ListNode to arrays
  const l1Values = convertToValueList(l1);
  const l2Values = convertToValueList(l2);
  //find the longest of either list
  const len = Math.max(l1Values.length, l2Values.length);

  //when adding a column, value should not exceed 9, otherwise it'll be set to the remainder
  //i.e.: 10 -> 1, 23 -> 2, 30 -> 3
  let remainder = 0;
  const sum = [];
  for (let i = 0; i < len; i++) {
    //add the sum of each value of the list at the "i" position
    //if the value does not exist (i.e.: undefined) use default 0
    //add the remainder if it exists
    const tempSum = (l1Values[i] || 0) + (l2Values[i] || 0) + remainder;
    //update the remainder (any value under 10 is set to 0 because of Math.floor)
    remainder = Math.floor(tempSum / 10);
    //add the value (modulo 10 so only numbers 0 - 9 are added)
    sum.push(tempSum % 10);
  }

  console.log(sum);
  //generate the list node and return final result
  return generateListNode(sum);
};

const res = addTwoNumbers(list1, list2);
console.log(res);
