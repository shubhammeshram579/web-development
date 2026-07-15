import java.util.LinkedList;

public class LLToQueueAdapter {

    public static class InnerLLToQueueAdapter {
    
         private LinkedList<Integer> list;

    public InnerLLToQueueAdapter() {
        list = new LinkedList<>();
    }

    public int size() {
        return list.size();
    }

    public void add(int val) {
        list.addLast(val);
    }

    public int remove() {
        if (size() == 0) {
            System.out.println("qoeue underflow");
            return -1;
        }
        return list.removeFirst();
    }

    public int peek() {
        if (size() == 0) {
            System.out.println("Queue underflow");
            return -1;
        }
        return list.getFirst();
    }

    }


       public static void main(String[] args) {

        InnerLLToQueueAdapter qs = new InnerLLToQueueAdapter();

        qs.add(10);
        qs.add(20);
        qs.add(30);

        System.out.println(qs.peek());   // 10
        System.out.println(qs.remove()); 
        System.out.println(qs.size());  // 2
    }
    
    
}
