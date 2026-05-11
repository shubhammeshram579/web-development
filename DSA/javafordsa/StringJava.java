public class StringJava {

    public static void main(String[] args){


        // LEVEL 1 — String Basics

        // Create and Print String

        String userEmailId = "shubham123@gmail.com";

        System.out.println(userEmailId);

        // 2. String Length
          System.out.println(userEmailId.length());


    
        // 3. Access Characters

        String UserName = "shubham";

        for(int i = 0; i < UserName.length(); i++){
            System.out.println(UserName.charAt(i));
        }


        // LEVEL 2 — Basic String Operations

        String lastName1 = "Meshram";
        String lastName2 = "MESHRAM";

        System.out.println(lastName1.toUpperCase());
        System.out.println(lastName2.toUpperCase());


        // 6. Compare Strings

        String a1 = "Java";
        String v2 = "Java";

        System.out.println(a1.equals(v2));



        // LEVEL 3 — Important Beginner Problems

        // 7. Reverse a String

        String Str = "Shubham";
        String revStr = "";

        // for(int i = revStr.length() -1 ; i >= 0; i--){
        //     System.out.print(revStr.charAt(i));
        // }

        for(int i = Str.length() -1 ; i >= 0; i--){
            revStr += Str.charAt(i);
        }

        // System.out.print(revStr);




        // 8. Check Palindrome String

        String str = "madam";


        String reversed = "";

         for (int i = str.length() - 1; i >= 0; i--) {

            reversed += str.charAt(i);
        }


        if(str.equals(reversed)){
            System.out.print("Palindrome");

        }else{
             System.out.print("not Palindrome");
        }

        System.out.println("\n");



        // 9. Count Vowels and Consonants

        String strVcheck = "shubham";

        int vowels = 0;
        int consonants = 0;

        strVcheck = strVcheck.toLowerCase();

        for (int i = 0; i < strVcheck.length(); i++) {

            char ch = strVcheck.charAt(i);

            if (ch == 'a' || ch == 'e' || ch == 'i' ||
                ch == 'o' || ch == 'u') {

                vowels++;
            } else {
                consonants++;
            }
        }


        System.out.println("Vowels: " + vowels);
        System.out.println("Consonants: " + consonants);




        // LEVEL 4 — Intermediate String Problems










      

    }
    
}
