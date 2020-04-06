Bon Appétit
Source: HackerRank (https://www.hackerrank.com/challenges/bon-appetit/problem)
Difficulty: Easy
Brief:
Anna and Brian are sharing a meal at a restuarant and they agree to split the bill equally. Brian wants to order something that Anna is allergic to though, and they agree that Anna won't pay for that item. Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.

For example, assume the bill has the following prices: bill=[2,4,6]. Anna declines to eat item k=bill[2] which costs 6. If Brian calculates the bill correctly, Anna will pay (2+4)/2=3. If he includes the cost of bill[2], he will calculate (2+4+6)/2=6. In the second case, he should refund 3 to Anna.

Function Description:
Complete the bonAppetit function in the editor below. It should print Bon Appetit if the bill is fairly split. Otherwise, it should print the integer amount of money that Brian owes Anna.
bonAppetit has the following parameter(s):
- bill: an array of integers representing the cost of each item ordered
- k: an integer representing the zero-based index of the item Anna doesn't eat
- b: the amount of money that Anna contributed to the bill

Output Format:
If Brian did not overcharge Anna, print Bon Appetit on a new line; otherwise, print the difference (i.e. b(charged) - b(actual)) that Brian must refund to Anna. This will always be an integer.

Sample output:
bill: [3, 10, 2, 9]
k: 1
b: 12

Sample output:
5

Explanation:
Anna didn't eat item bill[1] = 10, but she shared the rest of the items with Brian. The total cost of the shared items is 3+2+9=14 and, split in half, the cost per person is b(actual)=7. Brian charged her b(charged)=12 for her portion of the bill. We print the amount Anna was overcharged, b(charged)-b(actual)=12-7=5 , on a new line.

My solution:
Test case: bill=[3,10,2,9], k=1, b=7
Reading from the instructions, I know that there's an item on the bill that only one person (Brian) ate. Since it's unfair to split this item between two people, first I need is to remove it from the array, I have given argument k that holds 0-indexed location of item that was eaten by Brian only. Now that I know that, I use bill.splice(k,1). splice() mutates array by removing item from the given index, the second argument indicates how many items gets removed starting from that index. In our case, it it will work as such: bill.splice(1,1), since k=1, and we only want to remove 1 item from the array. The new array looks like this now: [3,2,9], since [10] from the index 1 was removed.
Now that I have bill that can be split equally between two people, I've creaded function expression const calculator = (a,b) => a+b that will be used to calculate the sum of the bill in const sum = bill.reduce(calculator)/2 and divided into 2 to find exact amount each person needs to pay. 
(3+2+9)/2 = 7.
Now that I know each amout each person paid, I need to find out the difference of what was the actual charge and how much Anna paid. For that I've creaded variable const difference = b - sum. b is argument that holds value of how much Anna contributed to the meal. If the difference = 0, the algorithm will print "Bon Appétit", if the difference is anything else but 0, the algorithm will print out the difference that Anna over-paid or under-paid.
