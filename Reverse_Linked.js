/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let x = null;
  let y = head;

  while (y !== null) {
    let next_node = y.next;
    y.next = x;

    x = y;
    y = next_node;
  }
  return x;
};
