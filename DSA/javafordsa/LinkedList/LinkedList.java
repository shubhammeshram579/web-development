public class LinkedList {

    // static class Node {

    //     int data;
    //     Node next;

    //     Node(int data) {
    //         this.data = data;
    //     }
    // }

    // public static void main(String[] args) {

    //     Node first = new Node(10);

    //     System.out.println(first.data);

    //     System.out.println(first.next);
    // }


    public static class Node {
        int data;
        Node next;

        Node(int data){
            this.data = data;
            this.next = null;
        }
    }

    public static class InnerLinkedList {
        Node head;
        Node tail;
        int size;


        // addLast
        void addLast(int val){
            Node temp = new Node(val);
            
            if(size == 0){
                head = tail = temp;

            }else{
                tail.next = temp;
                tail = temp;
            }

            size++;
        }

        // print node list
        void display(){

        Node temp = head;

        while(temp != null){
            System.out.print(temp.data + " ");
            temp = temp.next;
        }

         System.out.println();

        }

        // removefirst node 
        void removeFirst() {

            if(size == 0){
                System.out.println("list is emplty");

            }else if(size == 1){
                head = tail = null;
                size = 0;

            }else {
                head = head.next;
                size--;
            }
        }


        // get first node value in linked list
         int getFirst(){
            if(size == 0){
                System.out.println("list is emplty");
                return -1;
            }else {
                return head.data;
            }
        }



        // get lat node value in linked list
          int getLast(){
            if(size == 0){
                System.out.println("list is emplty");
                return -1;
            }else {
                return tail.data;
            }
        }


        // find the index value in linked list
         int getAt(int idx){
            if(size == 0){
                System.out.println("list is emplty");
                return -1;
            }else if( idx < 0 || idx >= size){
                System.out.println("invalid agrments");
                return -1;
            }else{
                Node temp = head;

                for(int i = 0 ; i < idx ; i++){
                    temp = temp.next;
                }
                return temp.data;
            }

        }



        // addfirst node value in linked list 
        void addFirst(int val){

            Node temp = new Node(val);
            temp.next = head;
            head = temp;

            if(size == 0){
                tail = temp;
            }

            size++;
        }



        // Q. 4  add at index in linked list
        void addAt(int idx , int val){

            if(idx < 0 || idx > size){
                System.out.println("invalid agrement");
            }else if(idx == 0){
                addFirst(val);
            }else if(idx == size){
                addLast(val);
            }else{

                Node node = new Node(val);

                Node temp = head;

                for(int i  = 0; i < idx; i++){
                    temp = temp.next;
                }

                node.next = temp.next;
                temp.next = node;
                size++;

            }
        }


        // Q.5 remove last node in linked list
        void removeLast(){
            if(size == 0){
                System.out.println("list is emplty");
            }else if(size == 1){
                head = tail = null;
                size = 0;
            }else{
                Node temp = head;

                for(int i = 0 ; i < size - 2; i++){
                    temp = temp.next;
                }

                tail = temp;
                temp.next = null;
                size--;
            }
        }



        // Q. 6 remove at index in linked list 
        void removeAt(int idx){
            if(idx < 0 || idx >= size ){
                System.out.println("invalid agrement");
            }else if(idx == 0){
                removeFirst();
            }else if( idx == size -1){
                removeLast();
            }else{
                Node temp = head;

                for(int i = 0; i < idx - 1; i++){
                    temp = temp.next;

                }

                temp.next = temp.next.next;
                size--;
            }
        }



        // Q. 6 reverse a linked list

        Node getNodeAt(int idx){
            Node temp = head;
            for(int i = 0; i < idx; i++){
                temp = temp.next;
            }

            return temp;
        }


        void reverseAt(){
            int Li = 0;
            int Ri = size -1;

            while (Li < Ri) {
                Node left = getNodeAt(Li);
                Node right = getNodeAt(Ri);


                int temp = left.data;
                left.data = right.data;
                right.data = temp;

                Li++;
                Ri--;
            }
        }



        // Q.10 kTh element from the end linked list 
        int kthFromLast(int k){
            Node s = head;
            Node f = head;
            for(int i = 0; i < k; i++){
                f = f.next;
            }

            while (f != tail) {
                s = s.next;
                f = f.next;
                
            }

            return s.data;
        }

        // Q. 11 middel of linked list 
        int mid(){
            Node s = head;
            Node f = head;

            while (f.next != null && f.next.next != null) {
                s = s.next;
                f = f.next.next;
                
            }

            return s.data;
        }


        // Q. 13 remove duplocate in a sorted linkedlist

        void removeDuplicates() {

            InnerLinkedList res = new InnerLinkedList();

            while (this.size > 0) {

                int val = this.getFirst();
                this.removeFirst();

                if (res.size == 0 || res.tail.data != val) {
                    res.addLast(val);
                }
            }

            this.head = res.head;
            this.tail = res.tail;
            this.size = res.size;
        }



        // Q. 14 odd even linkedlist
        void oddEven(){
            InnerLinkedList odd = new InnerLinkedList();
            InnerLinkedList even = new InnerLinkedList();

            while (this.size > 0) {
                int val = this.getFirst();
                this.removeFirst();

                if(val % 2 == 0){
                    even.addLast(val);
                }else{
                    odd.addLast(val);
                }
                
            }

            if(odd.size > 0 && even.size > 0){
                odd.tail.next = even.head;
                this.head = odd.head;
                this.tail = even.tail;
                this.size = odd.size + even.size;
            }else if(odd.size > 0){
                this.head = odd.head;
                this.tail = odd.tail;
                this.size = odd.size;

            }else if(even.size > 0){
                this.head = even.head;
                this.tail = even.tail;
                this.size = even.size;
            }else {
                this.head = null;
                this.tail = null;
                this.size = 0;
            }

        }

        // Q. 15 k reverse in linked list
        void kReverse(int k) {
            InnerLinkedList prev = null;

            while (this.size > 0) {
                InnerLinkedList cur = new InnerLinkedList();

                if (this.size >= k) {
                    for (int i = 0; i < k; i++) {
                        int val = this.getFirst();
                        this.removeFirst();
                        cur.addFirst(val);
                    }
                } else {
                    int os = this.size;
                    for (int i = 0; i < os; i++) {
                        int val = this.getFirst();
                        this.removeFirst();
                        cur.addLast(val);
                    }
                }

                if (prev == null) {
                    prev = cur;
                } else {
                    prev.tail.next = cur.head;
                    prev.tail = cur.tail;
                    prev.size += cur.size;
                }
            }

            this.head = prev.head;
            this.tail = prev.tail;
            this.size = prev.size;
        }


        // Q. 16 display reverse linked list
        void displayReverseHelper(Node node) {
            if (node == null) {
                return;
            }

            displayReverseHelper(node.next);
            System.out.print(node.data + " ");
        }

        void displayReverse() {
            displayReverseHelper(this.head);
            System.out.println();
        }


        // Q . 17 reverse linked list using pointer 

        void reverseRRHelper(Node node){
            if(node == null){
                return;
            }

            reverseRRHelper(node.next);

            if(node != tail){
                node.next.next = node;
            }
        }

        void reversePr(){
            reverseRRHelper(head);
            head.next = null;
            Node temp = head;
            head = tail;
            tail = temp;
        }

    }

     




    // Q. 11 merge two sorded linked list 
    public static InnerLinkedList mergeTwoLinkedList(InnerLinkedList list1, InnerLinkedList list2){
        Node one = list1.head;
        Node two = list2.head;

        InnerLinkedList res = new InnerLinkedList();

        while (one != null && two != null) {
            if(one.data < two.data){
                res.addLast(one.data);
                one = one.next;
            }else{
                res.addLast(two.data);
                two = two.next;
            }
            
        }


        while (one != null) {
            res.addLast(one.data);
            one = one.next;
            
        }

        while (two != null) {
            res.addLast(two.data);
            two = two.next;
        }

        return res;
        
    }


    // Q12. merge sort a linked list 
    public static  Node midNode(Node head, Node tail){

            Node f = head;
            Node s = head;

            while (f != tail  && f.next != tail) {
                f = f.next.next;
                s = s.next;
                
            }
            return s;
    }

    public static InnerLinkedList mergeSort(Node head, Node tail){

    if(head == tail){
        InnerLinkedList br = new InnerLinkedList();
        br.addLast(head.data);
        return br;
    }

    Node mid = midNode(head, tail);

    InnerLinkedList fsh = mergeSort(head, mid);
    InnerLinkedList ssh = mergeSort(mid.next, tail);

    InnerLinkedList ch = mergeTwoLinkedList(fsh, ssh);

    return ch;
}



    public static void main(String[] args){
        // int[] array = {10};

        InnerLinkedList list = new InnerLinkedList();

        list.addLast(2);
        list.addLast(3);
        list.addLast(4);
        list.addLast(5);
        list.addLast(6);
        list.addLast(7);
        list.addLast(8);
        list.addLast(9);
        list.addLast(10);


        // list.addLast(50);
        // list.addLast(10);
        // list.addLast(40);
        // list.addLast(20);
        // list.addLast(30);

        // list.display();
        
        // list.removeFirst();

        // list.display();

        // System.out.println(list.getFirst());
        // System.out.println(list.getLast());
        // System.out.println(list.getAt(1));

        // list.addFirst(100);

        // list.display();

        // list.addAt(2, 500);

        // list.display();
        // list.addAt(1, 100);
        // list.display();

        // list.removeLast();


        // list.display();

        // list.removeAt(1);
        // list.display();

        // list.reverseAt();
        // list.display();

        // System.out.println(list.mid());
        // System.out.println(list.kthFromLast(1));

        // list.display();



        // //  merge two sorted linked list   
        // InnerLinkedList list1 = new InnerLinkedList();
        // list1.addLast(10);
        // list1.addLast(20);
        // list1.addLast(30);
        // list1.addLast(50);

        // InnerLinkedList list2 = new InnerLinkedList();
        // list2.addLast(5);
        // list2.addLast(15);
        // list2.addLast(25);
        // list2.addLast(40);
        // list2.addLast(60);

        // InnerLinkedList result = mergeTwoLinkedList(list1, list2);

        // result.display(); 




        // Q12 asnwes 

        // InnerLinkedList ans = mergeSort(list.head, list.tail);

        // ans.display();;


        // test removeduplicat
        // list.display();

        // list.removeDuplicates();


        // odd even 
        // list.display();

        // list.oddEven();

        // list.display();

        list.display();
        // list.kReverse(3);
        // list.display();
        // list.displayReverse();

        
        list.reversePr();
        list.display();







       










    



    
    }



}