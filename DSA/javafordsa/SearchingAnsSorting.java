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


// 🎯 Interview Priority

// Focus in this order:

// Must Master
// Bubble Sort
// Selection Sort
// Insertion Sort
// Merge Sort
// Quick Sort
// Very Frequently Asked
// Sort 0s and 1s
// Sort 0s,1s,2s
// Merge Sorted Arrays
// Interview Favorites
// Merge Intervals
// Count Inversions


// Time Complexity Summary
// Algorithm	Time Complexity
// Bubble Sort	O(n²)
// Selection Sort	O(n²)
// Insertion Sort	O(n²)
// Merge Sort	O(n log n)
// Quick Sort (Average)	O(n log n)
// Sort 0,1	O(n)
// Sort 0,1,2	O(n)
// Merge Sorted Arrays	O(n+m)
// Merge Intervals	O(n log n)
// Count Inversions (Merge Sort)	O(n log n)

import java.sql.Time;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

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



    // part 2
    // Sorting (10 Questions)
    // Bubble Sort
    // Sort an array in ascending order.
    // input
    // [5, 3, 8, 1]

    // Output
    // [1, 3, 5, 8]

    public static void bubbleSort(int[] arr){
        for(int i = 0; i < arr.length -1; i++){
            for(int j = 0; j < arr.length -1 - i; j++){
                if(arr[j] > arr[j + 1]){
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }

    }

    // 2. Selection Sort
    // Sort array by repeatedly selecting the smallest element.
    // inpute
    // [5,3,8,1]
    // output
    // [1,3,5,8]

    public static void selectionSort(int[] arr){

        for(int i = 0; i < arr.length -1; i++){
            int minIdex = i;

            for(int j = i + 1; j < arr.length; j++){
                if(arr[j] < arr[minIdex]){
                    minIdex = j;
                }

            }

            int temp = arr[i];
            arr[i] = arr[minIdex];
            arr[minIdex] = temp;

        }

    }


   




    // Insertion Sort
    // Insert each element in its correct position.
    // [5,3,8,1]
    // output
    // [1,3,5,8]

    static void insertionSort(int[] arr){

    for(int i=1;i<arr.length;i++){

        int current = arr[i];
        int j = i-1;

        while(j>=0 && arr[j] > current){

            arr[j+1] = arr[j];
            j--;
        }

        arr[j+1] = current;
    }
}

    // Merge Sort
    // Sort large arrays efficiently.
    // [5,2,8,1]
    // output
    // [1,2,5,8]

    // How it works
    // 5 2 8 1

    // Split

    // 5 2
    // 8 1

    // Sort

    // 2 5
    // 1 8

    // Merge

    // 1 2 5 8


    //Complexity  O(nlogn)
    public static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;

            // Sort left half
            mergeSort(arr, left, mid);

            // Sort right half
            mergeSort(arr, mid + 1, right);

            // Merge the sorted halves
            merge(arr, left, mid, right);
        }
    }


    public static void merge(int[] arr, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;

        int[] leftArr = new int[n1];
        int[] rightArr = new int[n2];

        // Copy data to temporary arrays
        for (int i = 0; i < n1; i++)
            leftArr[i] = arr[left + i];

        for (int j = 0; j < n2; j++)
            rightArr[j] = arr[mid + 1 + j];

        int i = 0, j = 0, k = left;

        // Merge temp arrays
        while (i < n1 && j < n2) {
            if (leftArr[i] <= rightArr[j]) {
                arr[k++] = leftArr[i++];
            } else {
                arr[k++] = rightArr[j++];
            }
        }

        // Copy remaining elements
        while (i < n1) {
            arr[k++] = leftArr[i++];
        }

        while (j < n2) {
            arr[k++] = rightArr[j++];
        }
    }


    // Quick Sort
    // Function to swap two elements
    static void swap(int[] arr, int i, int j) {

        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    // Partition function
    static int partition(int[] arr, int low, int high) {

        // Choose last element as pivot
        int pivot = arr[high];

        // Index of smaller element
        int i = low - 1;

        for (int j = low; j < high; j++) {

            if (arr[j] < pivot) {

                i++;

                swap(arr, i, j);
            }
        }

        swap(arr, i + 1, high);

        return i + 1;
    }

    // Quick Sort
    static void quickSort(int[] arr, int low, int high) {

        if (low < high) {

            int pivotIndex = partition(arr, low, high);

            quickSort(arr, low, pivotIndex - 1);

            quickSort(arr, pivotIndex + 1, high);
        }
    }


    static void printArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }

    // Sort 0s and 1s
    static void sortZeroOne(int[] arr) {

        int left = 0;
        int right = arr.length - 1;

        while (left < right) {

            if (arr[left] == 0) {

                left++;
            }

            else {

                int temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;

                right--;
            }
        }
    }


    // Sort 0s,1s,2s
    static void sort012(int[] arr) {

        int zero = 0;
        int one = 0;
        int two = 0;

        for (int num : arr) {

            if (num == 0)
                zero++;

            else if (num == 1)
                one++;

            else
                two++;
        }

        int index = 0;

        while (zero-- > 0)
            arr[index++] = 0;

        while (one-- > 0)
            arr[index++] = 1;

        while (two-- > 0)
            arr[index++] = 2;
    }

    // Merge Sorted Arrays
    static int[] mergeArrays(int[] arr1, int[] arr2) {

        int n = arr1.length;
        int m = arr2.length;

        int[] result = new int[n + m];

        int i = 0;
        int j = 0;
        int k = 0;

        while (i < n && j < m) {

            if (arr1[i] <= arr2[j]) {

                result[k] = arr1[i];
                i++;

            } else {

                result[k] = arr2[j];
                j++;
            }

            k++;
        }

        while (i < n) {

            result[k] = arr1[i];
            i++;
            k++;
        }

        while (j < m) {

            result[k] = arr2[j];
            j++;
            k++;
        }

        return result;
    }

    // Merge Intervals
     public static int[][] merge(int[][] intervals) {

        // Step 1: Sort intervals based on start time
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));

        List<int[]> result = new ArrayList<>();

        // Step 2: Add the first interval
        result.add(intervals[0]);

        // Step 3: Compare remaining intervals
        for (int i = 1; i < intervals.length; i++) {

            int[] last = result.get(result.size() - 1);

            // Overlap
            if (intervals[i][0] <= last[1]) {

                last[1] = Math.max(last[1], intervals[i][1]);

            } else {

                result.add(intervals[i]);
            }
        }

        return result.toArray(new int[result.size()][]);
    }
    // Count Inversions


    static int countInversions(int[] arr){

        int count = 0;

        for(int i=0;i<arr.length;i++){

            for(int j=i+1;j<arr.length;j++){

                if(arr[i] > arr[j]){

                    count++;
                }
            }
        }

        return count;
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
        // System.out.println(sqrt(25));


        // part 2 searching

    //     int[] arr = {5,3,8,1};
    //    System.out.print("Before Sorting: ");
    //     printArray(arr);

    //     // bubbleSort(arr);
    //     // selectionSort(arr);
    //     insertionSort(arr);

    //     System.out.print("After Sorting: ");
    //     printArray(arr);



        // int[] arr = {38, 27, 43, 3, 9, 82, 10};
        //  mergeSort(arr, 0, arr.length - 1);
        //  System.out.println("Sorted Array: " + Arrays.toString(arr));



        //  int[] arr = {8,4,7,9,3,10,5};

        // quickSort(arr,0,arr.length-1);

        // printArray(arr);



        //   int[] arr = {1,0,1,0,1,0};

        // sortZeroOne(arr);

        // printArray(arr);



        // int[] arr = {2,0,2,1,1,0};

        // sort012(arr);
        //  printArray(arr);




        //  int[] arr1 = {1,3,5};
        // int[] arr2 = {2,4,6};

        // int[] result = mergeArrays(arr1, arr2);

        // printArray(result);
        



        // int[][] intervals = {
        //         {1,3},
        //         {2,6},
        //         {8,10},
        //         {15,18}
        // };

        // int[][] ans = merge(intervals);

        // for (int[] interval : ans) {

        //     System.out.println(
        //             "[" + interval[0] + ", " + interval[1] + "]"
        //     );
        // }



         int[] arr = {2,4,1,3,5};

        System.out.println(countInversions(arr));
    

        

    }

}
