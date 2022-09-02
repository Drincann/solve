/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const reverse = (head, k) => {
  if (head.next === null) return head;
  if (k === 1) return head;
  return reverse(head.next, k - 1).next = head;
};

/**
* @param {ListNode} head
* @param {number} k
* @return {ListNode}
*/
var reverseKGroup = function (head, k) {
  let cnt = k, nextGroupHead = head, newHead = null;
  while (cnt-- && nextGroupHead !== null) {
    newHead = nextGroupHead;
    nextGroupHead = nextGroupHead.next;
  };
  if (cnt !== -1) {
    return head
  }
  reverse(head, k).next = reverseKGroup(nextGroupHead, k);
  return newHead;
};
