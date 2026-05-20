import java.util.Arrays;

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

        System.out.print(revStr);




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
        // 10. Remove Spaces from String

        String removeSpaces = "shubham pramanand meshram";

        removeSpaces = removeSpaces.replace(" ", "");

        System.out.println(removeSpaces);


        // 11. Count Frequency of Characters
        // Input: apple
        // Output:
        // a = 1
        // p = 2
        // l = 1
        // e = 1

        String frequencyStr = "apple";

        for(int i = 0; i < frequencyStr.length(); i++){

            int count = 0;

            for(int j = 0; j < frequencyStr.length(); j++){
                if(frequencyStr.charAt(i) == frequencyStr.charAt(j)){
                    count++;
                }

            }

            

            System.out.println(frequencyStr.charAt(i) + " = " + count);
        }


        // 12. Find Duplicate Characters


        // LEVEL 5 — StringBuilder (Very Important)

        // 13. Reverse String Using StringBuilder

        String Sstr = "hello";

        StringBuilder sb = new StringBuilder(Sstr);

        System.out.println(sb.reverse());


        // 14. Append in StringBuilder

         StringBuilder sb2 = new StringBuilder();

        sb2.append("Java ");
        sb2.append("DSA");

        System.out.println(sb2);

        // LEVEL 6 — Important DSA String Problems


        String s1 = "listen";
        String s2 = "silent";

        char[] arr1 = s1.toCharArray();
        char[] arr2 = s2.toCharArray();


        Arrays.sort(arr1);
        Arrays.sort(arr2);

        if (Arrays.equals(arr1, arr2)) {
            System.out.println("Anagram");
        } else {
            System.out.println("Not Anagram");
        }



        // 17. Longest Word in Sentence

        String logwest = "I love Java programming";
        String[] words = logwest.split(" ");

        String logeword = "";


        for(String word : words){
            if(word.length() > logeword.length()){
                logeword = word;
            }
        }

        System.out.println("logest word " + " " + logeword);














      

    }
    
}
