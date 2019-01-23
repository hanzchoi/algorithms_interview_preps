Solution
First, we sort our input array of meetings by start time so any meetings that
might need to be merged are now next to each other.

Then we walk through our sorted meetings from left to right.
At each step, either:

  1. We can merge the current meeting with the previous one, so we do.
  2. We can't merge the current meeting with the previous one, so we know the
  previous meeting can't be merged with any future meetings and we throw the
  current meeting into mergedMeetings.

Complexity
O(n lg n)O(nlgn) time and O(n) space.

Even though we only walk through our array of meetings once to merge them, we sort all the meetings first, giving us a runtime of O(n lg n). It's worth noting that if our input were sorted, we could skip the sort and do this in O(n) time!

We create a new array of merged meeting times. In the worst case, none of the meetings overlap, giving us an array identical to the input array. Thus we have a worst-case space cost of O(n)O(n).
