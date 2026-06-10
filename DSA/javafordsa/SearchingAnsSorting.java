// PART 1: SEARCHING

// Searching (10 Questions)
// Linear Search
// Binary Search
// First Occurrence
// Last Occurrence
// Count Occurrence
// Search Insert Position
// Floor of Number
// Ceil of Number
// Square Root
// Peak Element


// part 2
// Sorting (10 Questions)
// Bubble Sort
// Selection Sort
// Insertion Sort
// Merge Sort
// Quick Sort
// Sort 0s and 1s
// Sort 0s,1s,2s
// Merge Sorted Arrays
// Merge Intervals
// Count Inversions

// Searching means finding an element in a collection.

import java.sql.Time;

public class SearchingAnsSorting {

    // LEVEL 1: Linear Search
    // Time Complexity
    // Idea
    // Check every element one by one.

    static int linearSearch(int[] arr, int target) {

        int searchV = 0;

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                searchV = i;
            }
        }

        return searchV;

    }

    // 2. Binary Search (we are used for find to name of statudet name in (arraylist
    // or index wise like disctory is alpabet then we get abpabest fast find the
    // statuden name we used binary search for find then name mid of disctonery))

    // Find target in a sorted array.

    // Array = [10,20,30,40,50]
    // Target = 40

    // Output = 3

    // my own quetion for

    // Why is while preferred over for in Binary Search?

    // You can say:

    // Binary Search continues until the search space becomes empty (low > high).
    // Since the number of iterations is not known beforehand and low and high
    // change dynamically, a while loop expresses the algorithm more naturally. A
    // for loop can also be used, but while makes the stopping condition clearer and
    // easier to understand.

    static int binarySearch(int[] arr, int target) {

        int low = 0;
        int high = arr.length - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (arr[mid] == target) {
                return mid;
            } else if (arr[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }

        }

        return -1;
    }

    // 3. First Occurrence
    // Find first position of duplicate element.
    // array [1,2,2,2,3,4]

    // Target = 2

    // Output = 1

    static int firstOccurrence(int[] arr, int target) {
        int low = 0;
        int high = arr.length - 1;
        int ans = -1;

        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (arr[mid] == target) {
                ans = mid;
                high = mid - 1;
            } else if (arr[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }

        }

        return ans;
    }

    // 4. Last Occurrence
    // Find last position of duplicate element.
    // [1,2,2,2,3,4]

    // Target = 2

    // Output = 3

    static int lastOccurrence(int[] arr, int target) {

        int low = 0;
        int high = arr.length - 1;
        int ans = -1;

        while (low <= high) {

            int mid = low + (high - low) / 2;

            if (arr[mid] == target) {

                ans = mid;
                low = mid + 1; // change here
            }

            else if (arr[mid] < target) {
                low = mid + 1;
            }

            else {
                high = mid - 1;
            }
        }

        return ans;
    }

    // 5. Count Occurrence
    // Count how many times target appears.

    // [1,2,2,2,3]

    // Target = 2

    // Output = 3

    // we are used recustion function
    static int countOccurrence(int[] arr, int target) {

        int first = firstOccurrence(arr, target);

        if (first == -1) {
            return 0;
        }

        int last = lastOccurrence(arr, target);

        return last - first + 1;
    }

    // 6. Search Insert Position
    // If target doesn't exist, return insertion position.
    // [1,3,5,6]

    // Target = 2

    // Output = 1

    static int searchInsert(int[] arr, int target) {

        int low = 0;
        int high = arr.length - 1;

        while (low <= high) {

            int mid = low + (high - low) / 2;

            if (arr[mid] == target)
                return mid;

            if (arr[mid] < target)
                low = mid + 1;
            else
                high = mid - 1;
        }

        return low;
    }

    // 7. Floor of Number

    // Largest number ≤ target.
    // Array = [2,4,6,8,10]

    // Target = 7

    // Output = 6

    static int floor(int[] arr, int target) {

        int low = 0;
        int high = arr.length - 1;

        int ans = -1;

        while (low <= high) {

            int mid = low + (high - low) / 2;

            if (arr[mid] <= target) {

                ans = arr[mid];
                low = mid + 1;
            }

            else {
                high = mid - 1;
            }
        }

        return ans;
    }

    // 8. Ceil of Number
    // Smallest number ≥ target.
    // Array = [2,4,6,8,10]

    // Target = 7

    // Output = 8

    static int ceil(int[] arr, int target) {

        int low = 0;
        int high = arr.length - 1;

        int ans = -1;

        while (low <= high) {

            int mid = low + (high - low) / 2;

            if (arr[mid] >= target) {

                ans = arr[mid];
                high = mid - 1;
            }

            else {
                low = mid + 1;
            }
        }

        return ans;
    }

    // 9. Square Root Using Binary Search
    // Find integer square root.

    // Input = 25

    // Output = 5

    static int sqrt(int n) {

        int low = 1;
        int high = n;

        int ans = 0;

        while (low <= high) {

            int mid = low + (high - low) / 2;

            long square = (long) mid * mid;

            if (square == n) {
                return mid;
            } else if (square < n) {

                ans = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return ans;
    }

    public static void main(String[] args) {

        // int[] arr = {1,2,3,4,5,6};
        // int[] arr = { 10, 20, 30, 40, 50 };
        // int[] arr = { 1,2,2,2,3,4};
        // expriment my own
        // int target = 2;
        // int count = 0;
        // for(int i = 0; i < arr.length ; i++){
        // if(arr[i] == target){
        // count++;
        // }
        // }
        // System.out.println(count);

        // int[] arr = {1,3,5,6};
        // int[] arr = {2,4,6,8,10};

        // System.out.println(linearSearch(arr, 4));
        // System.out.println(binarySearch(arr, 40));
        // System.out.println(firstOccurrence(arr, 2));
        // System.out.println(lastOccurrence(arr, 2));
        // System.out.println(countOccurrence(arr, 2));
        // System.out.println(searchInsert(arr, 2));
        // System.out.println(floor(arr, 7));
        // System.out.println(ceil(arr, 7));
        System.out.println(sqrt(25));

    }

}
