Apple and Orange
Source: HackerRank (https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=false)
Difficulty: Easy
Brief:
Sam's house has an apple tree and an orange tree that yield an abundance of fruit. In the diagram below, the red region denotes his house, where s is the start point, and t is the endpoint. The apple tree is to the left of his house, and the orange tree is to its right. You can assume the trees are located on a single point, where the apple tree is at point a, and the orange tree is at point b.
When a fruit falls from its tree, it lands d units of distance from its tree of origin along the x-axis. A negative value of d means the fruit fell d units to the tree's left, and a positive value of d means it falls d units to the tree's right.
Given the value of d for m apples and n oranges, determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range [s,t])?
For example, Sam's house is between s=7 and t=10. The apple tree is located at a=4 and the orange at b=12. Apples are thrown apples=[2,3,-4] units distance from a, and oranges=[3,-2,-4] units distance b. Adding each apple distance to the position of the tree, they land at [4+2, 4+3, 4+-4]=[6,7,0]. Oranges land at [12+3, 12+-2, 12+-4]=[15,10,8]. One apple and two oranges land in the inclusive range 7-10 so we print: 1, 2.

Sample input:
s=7;
t=10;
a=4;
b=12;
apples=[2,3,-4];
oranges=[3,-2,-4];

Sample output:
1 2

Explanation:
The first apple falls at position: 4+2=6;
The second apple falls at position: 4+3=7;
The third apple falls at position: 4-4=0;
The first orange falls at position: 12+3=15;
The second orange falls at position: 12-2=10;
The third orange falls at position: 12-4=8;
Only the first apple falls within the region between 7 and 11, so we print 1 as our first line of output;
Two oranges (second and third) fall within the region between 7 and 11, so we print 2 as our second line of output;

My solution:
Step 1: Set up counters applesCounter & orangesCounter - each time apple or orange falls within the s-t range, the counters will get incremented by 1;
Step2: Create for-loop to itereate apples array, that:
Step2.1: sums apples[i] with a;
Step2.2: runs through if statement that checks if apples[i] is ≥ to s and ≤ t. If true, applesCounter gets incremented by 1.
Step3: Create for-loop to itereate oranges array, that:
Step3.1: sums oranges[i] with b;
Step3.2: runs through if statement that checks if oranges[i] is ≤ to s and ≥ t. If true, orangesCounter gets incremented by 1.
Step4: Log the results.

Note the difference for larger/smaller-equals to s/t for apples and oranges in step 2.2 and 3.2. Since the apple tree is located on the left of the house and orange tree is located on the right of the house on the x-axis.
