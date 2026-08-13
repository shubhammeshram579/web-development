import java.util.*;

public class main {

    public static boolean handelClosing(Stack<Character> st , char Character){
        if(st.size() == 0){
            return false;
        }else if(st.peek() != Character){
            return false;

        }else{
            st.pop();
            return true;
        }

    }

    // q3. next grater element on the right 
    public static int[] solve(int[] arr) {

    int[] nge = new int[arr.length];
    Stack<Integer> st = new Stack<>();

    st.push(0);

    for (int i = 1; i < arr.length; i++) {

        while (st.size() > 0 && arr[i] > arr[st.peek()]) {

            int pos = st.pop();
            nge[pos] = arr[i];
        }

        st.push(i);
    }

    while (st.size() > 0) {
        int pos = st.pop();
        nge[pos] = -1;
    }

    return nge;
}


//   Q 4 stock span

public static int[] SolveSpan(int[] arr){
    int[] spam = new int[arr.length];

    Stack<Integer> st = new Stack<>();

    st.push(0);
    spam[0] = 1;


    for(int i = 1; i < arr.length; i++){
        while(st.size()  > 0 && arr[i] > arr[st.peek()]){
            st.pop();
        }

        if(st.size() == 0){
            spam[i] = i + 1;
        }else{
            spam[i] = i - st.peek();
        }

        st.push(i);
    }
    return spam;
}


    public static void main(String[] args){

        // basic undetanding stack used in java
        // Stack<Integer> st = new Stack<>();

        // st.push(10);
        // st.push(20);
        // st.push(30);
        // st.push(40);

        // System.out.println(st);
        // System.out.println(st.peek());
        
        // st.pop();

        // System.out.println(st);



        // Q.1 quetion duplicate bracket find
        // Scanner scn = new Scanner(System.in);
        
        // String str = scn.nextLine();

        // String str = "((a + b) + (c + d))";
        // String str = "(a + b) + ((c + d))";


        // Stack<Character> st = new Stack<>();

        // for(int i = 0; i < str.length(); i++){

        //     char ch = str.charAt(i);

        //     if(ch == ')'){
        //         if(st.peek() == '('){
        //             System.out.print("true");
        //             return;
        //         }else{
        //             while (st.peek() != '(') {
        //                 st.pop();
                        
        //             }
        //             st.pop();
        //         }

        //     }else{
        //         st.push(ch);
        //     }
        // }                                                                                                        


        // System.out.println(false);



        // Q. 2 blacnced bracket

        // String str2 = "[(a+b) + {(c + d) * (c /f)}]"; // true
        // String str2 = "[(a+b) + {(c + d) * (c /f)]}"; // false
        // String str2 = "[(a+b) + {(c + d) * (c /f)}"; // false

        // Stack<Character> st2 = new Stack<>(); 

        // for(int i = 0; i < str2.length(); i++){
        //     char ch = str2.charAt(i);
        //     if(ch == '(' || ch == '{' || ch == '['){
        //         st2.push(ch);
        //     }else if(ch == ')'){
        //         boolean val = handelClosing(st2, '(');

        //         if(val == false){
        //             System.out.println(val);
        //             return;
        //         }
        //     }else if(ch == '}'){
        //         boolean val = handelClosing(st2, '{');
        //           if(val == false){
        //             System.out.println(val);
        //             return;
        //         }
        //     }else if(ch == ']'){
        //            boolean val = handelClosing(st2, '[');
        //           if(val == false){
        //             System.out.println(val);
        //             return;
        //         }
        //     }else{

        //     }  
        // }

        // if(st2.size() == 0 ){
        //         System.out.println(true);
        // }else{
        //         System.out.println(false);
        // }



        // q.3 output 

        // int[] arr = {2, 5, 9, 3, 1, 12, 6, 8, 7};

        // // int[] ans = solve(arr);
        // int[] ans = SolveSpan(arr);

        // for (int i = 0; i < ans.length; i++) {
        //     System.out.print(ans[i] + " ");
        // }



        // Q. 4 largest histogram area

        Scanner scn = new Scanner(System.in);

        int n = scn.nextInt();

        int[] arr = new int[n];

        for (int i = 0; i < n; i++) {
            arr[i] = scn.nextInt();
        }

        // Right Boundary
        int[] rb = new int[n];
        Stack<Integer> st = new Stack<>();

        st.push(n - 1);
        rb[n - 1] = n;

        for (int i = n - 2; i >= 0; i--) {

            while (st.size() > 0 && arr[i] <= arr[st.peek()]) {
                st.pop();
            }

            if (st.size() == 0) {
                rb[i] = n;
            } else {
                rb[i] = st.peek();
            }

            st.push(i);
        }

        // Left Boundary
        int[] lb = new int[n];

        st.clear();

        st.push(0);
        lb[0] = -1;

        for (int i = 1; i < n; i++) {

            while (st.size() > 0 && arr[i] <= arr[st.peek()]) {
                st.pop();
            }

            if (st.size() == 0) {
                lb[i] = -1;
            } else {
                lb[i] = st.peek();
            }

            st.push(i);
        }

        int maxArea = 0;

        for (int i = 0; i < n; i++) {

            int width = rb[i] - lb[i] - 1;
            int area = arr[i] * width;

            maxArea = Math.max(maxArea, area);
        }

        System.out.println(maxArea);

        
        
    }    
}
