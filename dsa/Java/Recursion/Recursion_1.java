class Recursion_1 {

    // printing even numbers from 2 to N using recursion
    private static void print2toN(int n){
        if(n == 0) return ;
        print2toN(n-2);
        System.out.println(n);
    }

    // private static int functionalSumN(int n){
    //     if(n==0) return 0;

    //     return functionalSumN(n-1) + n;
    // }

    // private static void parameterizedSumN(int n, int sum){
    //     if(n == 0){
    //         System.out.println(sum);
    //         return;
    //     }
    //     parameterizedSumN(n-1, sum + n);
    // }

    // private static int functionalFact(int n){
    //     if(n==1) return 1;

    //     int fact = functionalFact(n-1);
    //     return fact * n;

    // }

    // private static void parameterizedFact(int n, int fact){
    //     if(n==0){
    //         System.out.println(fact);
    //         return;
    //     }

    //     parameterizedFact(n-1, fact * n);
    // }


    
    
    // private static void reverseArray(int[] arr, int l, int r){
        //     if(l >= r)return;
        
        //     // reversing array
        //         int temp = arr[l];
        //         arr[l] = arr[r];
        //         arr[r] = temp;
        //     reverseArray(arr, ++l, --r);
        //     return;
        // }


        // private static boolean isPalindrome(String str, int l, int r){
        //     if(l >= r) return true;
            
        //     if(str.charAt(l) != str.charAt(r)){
        //         return false;
        //     }

        //     return isPalindrome(str, l+1, r-1);
        // }


        // // functinal string reverse
        // private static String functionalStrReverse(String str){
        //     if(str.length() <= 1) return str;

        //     String newStr = functionalStrReverse(str.substring(1));

        //     return newStr + str.charAt(0);
        // }

        // private static void ParameterizedStrReverse(String str, String result){
        //     if(str.length() <= 0){
        //         System.out.println(result);
        //         return;
        //     }

        //     result += str.charAt(str.length()-1);
        //     ParameterizedStrReverse(str.substring(0, str.length()-1), result);
        // }


        // private static void reverse(char[] arr, int l, int r){
        //         if (l > r) return;

        //         // swap
        //         char temp = arr[l];
        //         arr[l] = arr[r];
        //         arr[r] = temp;

        //         reverse(arr, l+1, r-1);
        // }





    public static void main(String[] args){
        System.out.println("running");
        print2toN(30);
        // int sum = functionalSumN(5);
        // System.out.println(sum);

        // parameterizedSumN(5, 0);

        // int fact = functionalFact(4);
        // System.out.println(fact);
        // parameterizedFact(5, 1);

        // int[] arr = {1, 2, 3, 4, 5};
        // int n = arr.length;
        // reverseArray(arr, 0, n-1);

        // for(int i=0; i<n; i++){
        //     System.out.print(arr[i] +" ");
        // }

        // String str = "naman";
        // System.out.print(isPalindrome(str, 0, str.length()-1));

        // String revStr = functionalStrReverse(str);
        // System.out.println(revStr);
        
        // ParameterizedStrReverse(str, "");

        // char[] ch = {'m', 'o', 'n', 'a'};
        // reverse(ch, 0, ch.length-1);

        // for(int i=0; i<ch.length; i++){
        //     System.out.print(ch[i] +" ");
        // }

    }
}