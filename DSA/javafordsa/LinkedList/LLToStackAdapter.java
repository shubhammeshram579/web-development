import java.util.LinkedList;

public class LLToStackAdapter {

public static class InnerLLToStackAdapter {

    private LinkedList<Integer> list;

    public InnerLLToStackAdapter() {
        list = new LinkedList<>();
    }

    public int size() {
        return list.size();
    }

    public void push(int val) {
        list.addFirst(val);
    }

    public int pop() {
        if (size() == 0) {
            System.out.println("Stack underflow");
            return -1;
        }
        return list.removeFirst();
    }

    public int top() {
        if (size() == 0) {
            System.out.println("Stack underflow");
            return -1;
        }
        return list.getFirst();
    }

    
}


     public static void main(String[] args) {

        InnerLLToStackAdapter st = new InnerLLToStackAdapter();

        st.push(10);
        st.push(20);
        st.push(30);

        System.out.println(st.top());   // 30
        System.out.println(st.pop());   // 30
        System.out.println(st.top());   // 20
        System.out.println(st.size());  // 2
    }
    

    
}
