import java.util.*;

public class DSAPractice {


    // functions

    public static int add(int a, int b){
        return a  + b;
    }

    public static String Userfullname(String n1 , String n2){
        return n1 + " " + n2;
    }

    // 🔹 Main Method (Testing Area)
    public static void main(String[] args) {


        // basic varibles
        int age = 27;
        double salary = 5000.40;
        String user = "shubham";

        char grade = 'a';


        System.out.println(age + " " + salary + " " + user + " " + grade );

        // basic oprater like Arithmetic (+ * - / %) ,Comparison (== != > <) , logical(&& || !)
        int a = 3;
        int b = 10;

        int sum = a * b;

        System.out.println("total" + " " + sum);



        // Conditional Statements
        int d = 10;
        int h = 10;

        if(d == h){
            System.out.println("both value is match");
        }else if(d < h){
            System.out.println("y greter then x");
        }else{
            System.out.println("not match");
        }

        String item = "mouse";

        if(item == "mouse"){
            System.out.println("match");

        }else{
            System.out.println("not match");
        }


        for(int i = 1; i < 10; i++){
            if(i > 2 && i < 8){
                System.out.println(i);
            }
        }


        int diveded = 10;

        if(diveded % 2 == 0){
            System.out.println("even");
        }else{
            System.out.println("odd");
        }


        // print table 2 to 20
        // for(int i = 2; i <= 20; i++){
        //     if(i % 2 == 0){
        //         System.out.println(i);
        //     }
        // }



        // Loops

        // for(int i = 0; i <= 10; i++){
        //     System.out.println(i);
        // }

        // for(int i = 10; i > 0; i--){
        //     System.out.println(i);
        // }

        // int test = 0;

        // while (test < 0) {
        //     System.out.println(test);
        //     test++;
        //     // test += 1;
        // }


        // reverse while loop
        // int test2 = 10;

        // while (test2 > 0) {
        //     System.out.println(test);
        //     test--;
        // }

        // print table 3 to 30
        //  int rangenum = 3;

        //  while (rangenum <= 30) {
        //     if(rangenum % 3 == 0){
        //         System.out.println("whileTabele" + " " + rangenum);
        //     }
        //     rangenum++;
        //  }

        // fignicees number
        int f = 0;
        int n = 1;
        int fab = 1;


        for(int i = 0; i <= 10; i++){
            System.out.println(f);
            fab = f + n;
            f = n;
            n = fab;
        }



        int sumoftwo = add(10,20);

        System.out.println(sumoftwo);


        // function2 
        System.out.println(Userfullname("Shubham", "Meshram"));



    }
}