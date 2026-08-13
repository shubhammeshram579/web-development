public class StackImplementation {

    // public static class CustomStack {

    // int[] arr;
    // int top;
    // int capacity;

    // CustomStack(int size) {
    // arr = new int[size];
    // capacity = size;
    // top = -1;
    // }

    // void push(int value) {
    // if (top == capacity - 1) {
    // System.out.println("Stack Overflow");
    // return;
    // }
    // arr[++top] = value;
    // }

    // int pop() {
    // if (top == -1) {
    // System.out.println("Stack Underflow");
    // return -1;
    // }
    // return arr[top--];
    // }

    // int peek() {
    // if (top == -1)
    // return -1;
    // return arr[top];
    // }

    // boolean isEmpty() {
    // return top == -1;
    // }

    // void display() {
    // for (int i = top; i >= 0; i--) {
    // System.out.print(arr[i] + " ");
    // }
    // System.out.println();
    // }
    // }

    public static class CustomStack {

        int[] data;
        int tos;


        CustomStack(int cap){
            data = new int[cap];
            tos = -1;
        }



        // size print

        int size(){
            return tos + 1;
        }


        void display() {
            for(int i = tos; i >= 0; i--){
                System.out.println(data[i] + " ");
            }
            System.out.println();
        }

        // basic singal stack array handel push data to handel 
        void push(int val) {
            if(tos == data.length -1){
                System.out.println("stack overflow");
            }else{
                tos++;
                data[tos] = val;
            }
        }


        int pop() {
            if(tos == -1){
                System.out.println("stack overflow");
                return -1;
            }else{
                int val = data[tos];
                tos--;
                return val; 
            }
        }


        int top(){
             if(tos == -1){
                System.out.println("stack overflow");
                return -1;
            }else{
                int val = data[tos];
                return val; 
            }
        }

        boolean isEmpty() {
            return tos == -1;
        }

        void clear() {
            tos = -1;
        }



        // dynamic stack means if stack tis overflow then we create dynamic new stack then we add new data store in newstack
        void pushbyDm(int val) {
            if(tos == data.length -1){
                int[] nData = new int[2 * data.length];

                for(int i = 0; i < data.length; i++){
                    nData[i] = data[i];
                }

                data = nData;

                tos++;
                data[tos] = val;

            }else{
                tos++;
                data[tos] = val;
            }
        }


        int min() {
            if (tos == -1) {
                System.out.println("Stack Underflow");
                return -1;
            }

            int min = data[0];

            for (int i = 1; i <= tos; i++) {
                if (data[i] < min) {
                    min = data[i];
                }
            }

            return min;
        }


    }

    public static void main(String[] args) {

        CustomStack stack = new CustomStack(5);

        stack.push(10);
        stack.push(20);
        stack.push(30);
        stack.push(40);
        // stack.push(2);
        // stack.push(40);
        // stack.push(50);
        // stack.pushbyDm(60);
        // stack.pushbyDm(70);

        stack.display();

        // System.out.println("Pop: " + stack.pop());

        // stack.display();
        // stack.size();

        // stack.min();



        // System.out.println("min: " + stack.min());


        
    }
}