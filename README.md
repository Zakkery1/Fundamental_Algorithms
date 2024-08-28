# Fundamental Algorithms
 
1. Provide Big O Notation for each of your solutions

I believe my insertion sort would be O(n^2) because we have an outer for loop, a inner whlie loop that is doing the majority of the work, and we are adding shallow cloning a copy of the elements that were sorted and pushed into a new variable.   

I believe the reverse linked list would be O(n) because we are just looping through with a while loop. The n would just be the number of nodes it iterates through. 

2. Research Quick, Bubble and Insertion sort. Describe which algorithm and how they perform.

Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time by comparisons.
We take the element and compare it to the one to the left.  If the element is smaller than the left, clone the left, move it to the right one space, and replace the empty element that was moved with the current element.  


3. Research Dijkstra's Algorthim. Describe what problem this algorithm solves and list 2 situations, datasets, or real world applications that the algorithm can be used to solve. 

Dijkstra's Algorthim is used in GPS to help navigate you to your destination with the fastest route.  It also can help navigate you depending on traffic conditions.  Dijkstra's Algorthim is also used in Airline and railway scheduling . Airline and railway companies use Dijkstra's algorithm to plan efficient schedules and connections, minimizing travel times and costs for passengers.