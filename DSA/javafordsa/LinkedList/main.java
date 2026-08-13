import java.util.LinkedList;

public class main {
    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<>();

        list.add(10);
        list.add(20);
        list.add(3);

        list.addFirst(5);
        list.removeFirst();
        list.addLast(80);

        System.out.println(list);
    }
}
