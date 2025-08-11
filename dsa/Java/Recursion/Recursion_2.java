
public class Recursion_2 {
    // // finding frequency of 5 in integer functional recursion
    // private static int frequencyOf5(int n){
        //     if(n == 0) return 0;
        
        //     int result = frequencyOf5(n/10);
        //     int currDigit = n % 10;
        //     if(currDigit == 5){
            //         result += 1;
            //     }
            
            //     return result;
            // }


            
    // // finding frequency of 5 in integer parameterized recursion
    // private static void frequencyOf5(int n, int freq){
    //     if(n == 0){
    //         System.out.println(freq);
    //         return;
    //     } 

        
    //     frequencyOf5(n / 10, ((n % 10) == 5) ? freq+1 : freq);
    // }

    // // subString of string functional recursion
    // private static ArrayList subString(String str){
    //     if(str.length() < 1){
    //         ArrayList<ArrayList<String>> al = new ArrayList<>() ;
    //         ArrayList<String> temp = new ArrayList<>();
    //         temp.add("");
    //         al.add(temp);
    //         return al;
    //     }

    //     ArrayList<ArrayList<String>> result =  subString(str.substring(0, str.length()-1));
    //     if(result.size() > 0){
    //         ArrayList<String> list = new ArrayList<>();
    //         list.add(str);
    //         result.add(list);
    //     }

    //     return result;

    // }

    private static void subsequence(String str){
        int n = str.length();

        for(int i=0; i<=n; i++){
            for(int j=i; i<n; i++){
                
            }
        }
    }


    public static void main(String[] args){
        System.out.println("runing");

        // int freq = frequencyOf5(123);
        // System.out.println(freq);

        // frequencyOf5(4232, 0);
        String str = "Stri";
        // System.out.print(subString("Strings"));

        subsequence(str);

    }
}
