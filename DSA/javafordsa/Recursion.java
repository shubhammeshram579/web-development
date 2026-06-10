

//📘 Recursion in Java (Basic → Advanced)

// Recursion is one of the most important DSA concepts.

// In recursion:

// A function calls itself until a condition stops it.

// Used in:

// Trees
// Backtracking
// Dynamic Programming
// Graphs
// Divide & Conquer



// 🧠 Understand Recursion First

// Every recursion has:

// Base Condition → stops recursion
// Recursive Call → function calls itself


public class Recursion {

    // LEVEL 1 — Basic Recursion
    // 1. Print Numbers from 1 to N

    static void printNumber(int n){


        // base case 
        if(n  == 0){
            return;
        }

        // function calls itself
        printNumber(n - 1);


        // print n 
        System.out.println(n);
    }


    // 2. Print N to 1

    static void printReverse(int n){

        if(n == 0){
            return;
        }

        System.out.println(n);

        printReverse(n - 1);
    }



    // LEVEL 2 — Basic Recursive Problems

    // 3. Factorial Using Recursion
    static int factorialnum(int n){


        if(n == 0 || n == 1){
            return 1;
        }


        return n * factorialnum(n - 1);

    }


    // 4. Sum of First N Numbers
    
    static int sum(int n){

        if(n == 0){
            return 0;
        }

        return n + sum(n - 1);
    }


    // LEVEL 3 — Intermediate Recursion

    // 5. Fibonacci Series


    static int Fibonacci(int n){

        if(n == 0 || n == 1){
            return n ;
        }

        return  Fibonacci(n - 1) +  Fibonacci(n - 2);

    }


    // 6. Reverse String Using Recursion

    static void reverseStr(String str,int index){

        if(index < 0){
            return;
        }

        System.out.print(str.charAt(index));
        reverseStr(str, index - 1);

    }



    // 🔵 LEVEL 4 — Important DSA Recursion Problems

    // 7. Check Palindrome Using Recursion

    static boolean isPalindrom(String str, int start, int end){

        if(start >= end){
            return true;
        }

        if(str.charAt(start) != str.charAt(end)){
            return false;

        }


        return isPalindrom(str, start + 1, end - 1);

    }


    // 8. Power of Number

    // base 5 
    // maltple 3
    // The expression means 5 * 5 * 5 = 125. Therefore, the power (the final result) is 125.

    static int powerNumber(int base, int m ){
        if(m == 0){
            return 1;
        }

        return base * powerNumber(base, m - 1);
    }



    // LEVEL 5 — Advanced Recursion Concepts

    // 9. Binary Search Using Recursion

    static int binarySearch(int[] arr, int low , int high, int target){

        if(low > high){
            return -1;
        }

        int mid = (low + high) / 2;

        if (arr[mid] == target) {
            return mid;
        }

        else if (arr[mid] > target) {
            return binarySearch(arr, low, mid - 1, target);
        }

        else {
            return binarySearch(arr, mid + 1, high, target);
        }
    }



    // LEVEL 6 — Backtracking (Advanced)
    // Maze problems
    // N-Queens
    // Sudoku Solver

    




    public static void main(String[] args){

        // printNumber(5);
        // printReverse(5);
        // System.out.println(factorialnum(5));
        // System.out.println(sum(5));
        // System.out.println(Fibonacci(10));

        // String str = "hello";

        // reverseStr(str, str.length() - 1);

        // String str = "madam";

        // System.out.println(
        //     isPalindrom(str, 0, str.length() - 1)
        // );

        // System.out.println(powerNumber(5,3));


         int[] arr = {1,2,3,4,5,6,7};

         System.out.println(
            binarySearch(arr, 0, arr.length - 1, 5)
        );
    }


    
}



// 🔥 Recursion Golden Rule

// Every recursion problem should answer:

// What is base case?
// What smaller problem am I solving?
// What is recursive relation?