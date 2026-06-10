import java.util.Scanner;

public class ArraysJava {

    

    public static void main(String[] args){

        // 1. array decraltion java

        // int[] arr = {1,2,4,5,6,7};

        // System.out.println(arr);

        // for(int i = 0; i < arr.length; i++){
        //     System.out.println(arr[i]);
        // }

        // practise 

        int[] arr = {1,2,3,4,5};

        for(int i = 0 ; i < arr.length; i++){
            System.out.println(arr[i]);
        }


        //2. inpute value used in java
        // Scanner sc = new Scanner(System.in);

        // int[] arr2 = new int[5];

        // for(int i = 0; i < arr2.length; i++){
        //     arr2[i] = sc.nextInt();
        // }


        // System.out.println("print array");

        // for(int i = 0; i < arr2.length; i++){
        //     System.out.println(arr2[i]);
        // }



        // 3. Find Sum of Array

        // int[] arr = {1,2,3,5,6};

        // int sum = 0;

        // for(int i = 0; i < arr.length; i++){
        //     sum += arr[i];
        // }

        // System.out.println(sum);

        // practise

        int[] arr2 = {3,5,6};

        int sum = 0;

        for(int i = 0 ; i < arr2.length; i++){
            sum += arr2[i];

        }

        System.out.println(sum);


        // create new array add the value  not inseting 

        // int[] testarr1 = {1,2,3,4,5};
        // int[] textarr2 = {};

        // for(int i = 0; i < testarr1.length; i++){
        //     textarr2[i] = testarr1[i];

        // }


        //  for(int i = 0; i < textarr2.length; i++){
        //    System.out.println("testarray" + " " + i);

        // }





        // 4. Find Largest Element

        // int[] arr = {2,3,9,6,8};

        // int max = arr[0];

        // for(int i = 0; i < arr.length; i++){
        //     if(arr[i] > max){
        //         max = arr[i];
        //     }
        // }

        // System.out.println(max);


        // practise 

        // int[] arr3 = {2,5,60,3,20};
        // int max = arr3[0];

        // for(int i = 0; i < arr3.length; i++ ){

        //     if(arr3[i] > max){
        //         max = arr3[i];
        //     }

        // }

        // System.out.println(max);

        // practise 

        int[] arrm = {3,6,44,8,22,5};

        int max = arrm[0];

        for(int i = 0; i < arrm.length; i++){
            if(arrm[i] > max){
                max = arrm[i];
            }
        }

        System.out.println("arraynew findmax value" + " " + max);


        // 5. Find Smallest Element

        // int[] arr = {2,3,9,6,8};

        // int min = arr[0];

        // for(int i = 0; i < arr.length; i++){
        //     if(arr[i] < min){
        //         min = arr[i];
        //     }
        // }

        // System.out.println(min);


        // practise

        // int min = arr3[0];

        // for(int i = 0; i < arr3.length; i++){
        //     if(arr3[i] < min){
        //         min = arr3[i];
        //     }
        // }

        // System.out.println(min);



        // 6. Count Even and Odd Numbers

        // int[] arr = {1,2,3,4,5,6,7};

        // int even = 0;
        // int odd = 0;

        // for(int i = 0; i < arr.length; i++){
        //     if(arr[i] % 2 == 0){
        //         even++;
        //     }else{
        //         odd++;
        //     }

        // }

        // System.out.println("even count" + " " + even);
        // System.out.println("odd count" + " " + odd);


        // pratise 

        // int[] arr4 = {2,3,4,5,6,7,8};

        // int event = 0;
        // int odd = 0;

        // for(int i = 0; i < arr4.length; i++){
        //     if(arr4[i] % 2 == 0){
        //         event++;
        //     }else{
        //         odd++;
        //     }
        // }

        // System.out.println("even count:" + " " + event);
        // System.out.println("odd count:" + " " + odd);





        // LEVEL 3 — Array Manipulation

        // 7. reverse aaray

        // example1;

        // int[] arr = {1,2,3,4,5};

        // for(int i = arr.length -1; i >= 0; i--){
        //     System.out.print(arr[i] + " ");
        // }


        // eaxmple 2

        // int start = 0;
        // int end = arr.length -1;

        // while(start < end){
        //     int temp = arr[start];
        //     arr[start] = arr[end];
        //     arr[end] = temp;

        //     start++;
        //     end--;
        // }


        // for(int num: arr){
        //     System.out.print(num + " ");
        // }


        // pratise reverse array number using while loop
        
        // int[] arr5 = {1,2,3,4,5};

        // int start = 0;
        // int end = arr5.length -1;

        // while (start < end) {
        //     int temp = arr5[start];
        //     arr5[start] = arr5[end];
        //     arr5[end] = temp;

        //     start++;
        //     end--;
            
        // }

        // for(int num : arr5){
        //     System.out.print(num + " ");

        // }



        // 8. Copy One Array into Another

        // int[] arr1 = {1,2,3,4};

        // int[] arr2 = new int[arr1.length];

        // for(int i = 0; i < arr1.length; i++){
        //     // System.out.println(arr1[i]);
        //     arr2[i] = arr1[i];
        // }


        // for(int num : arr2  ){
        //       System.out.println(num + " ");
        // }


        // LEVEL 4 — Searching

        // 9. Linear Search

        // int[] arr = {20,50,60,70,80};

        // int target = 60;

        // boolean found = false; 

        // for(int i = 0; i < arr.length; i++){
        //     if(arr[i] == target){
        //         // System.out.println("found" + " " + arr[i]);
        //         // System.out.println("found");
        //         System.out.println("found at index" + " " + i);
        //         found = true;
        //         break;

        //     }

        //     if(!found){
        //          System.out.println(" not found");

        //     }

        // }


        // practise 

        int[] learearArr = {20,50,30,70};

        int findValue = 70;
        boolean ismatch = false;



        for(int i = 0; i < learearArr.length; i++){

            // System.out.println(learearArr[i]);
            if(learearArr[i] == findValue){
                ismatch = true;
                break;
            }else {
                System.out.println("not found");
            
            }


        }

        System.out.println("leanear search value 30 " + " " + ismatch);


        // LEVEL 5 — Sorting Basics

        // 10. Bubble Sort

        // int[] arr = {5,2,6,7,1,3};

        // for(int i = 0; i < arr.length - 1; i++){
        //     for(int j = 0; j < arr.length -1 - i; j++){
        //         if(arr[j] > arr[j + 1]){
        //             int temp = arr[j];
        //             arr[j] = arr[j + 1];
        //             arr[j + 1] = temp;

        //         }
        //     }

        // }

        // for(int num : arr){
        //     System.out.println(num + " ");
        // }


        // practise bubule short

        int[] bArr = {5,2,6,7,1,3};

        for(int i = 0; i < bArr.length -1 ; i++){
            for(int j = 0; j < bArr.length -1 - i; j++){
                if(bArr[j] > bArr[j + 1]){
                    int temp = bArr[j];
                    bArr[j] = bArr[j + 1];
                    bArr[j + 1] = temp;
                }

            }

        }

        for(int num: bArr){
            System.out.println(num + " ");
        }

        // LEVEL 6 — Intermediate Problems

        // 11. Second Largest Element



       // LEVEL 7 — Advanced Array Problems

        //  int[] arr = {1,2,3,4,5,6,7};

        // int target = 5;

        // int low = 0;
        // int high = arr.length - 1;

        // while (low <= high) {

        //     int mid = (low + high) / 2;

        //     if (arr[mid] == target) {
        //         System.out.println("Found at " + mid);
        //         return;
        //     }

        //     else if (arr[mid] < target) {
        //         low = mid + 1;
        //     }

        //     else {
        //         high = mid - 1;
        //     }
        // }

        // System.out.println("Not Found");
    
        
        


    }
    
}
