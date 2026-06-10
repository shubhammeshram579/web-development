public class Person {
    // Attributes (Personal Details)
    String name;
    int age;

    // Constructor to initialize the details
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Method to show the details
    public void display() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}


