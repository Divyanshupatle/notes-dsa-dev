class LongestComonPrefix{

    static void longestPrefix(String[] arr){
        if(arr == null || arr.length == 0) return;
        String ans = "";

        String prefix = arr[0];

        for(int i=0; i<prefix.length(); i++){
            char temp = prefix.charAt(i);
            for(int j=0; j<arr.length; j++){
                if(temp != arr[j].charAt(i)){
                    System.out.print(ans);
                    return;
                }
            }
            ans += temp;
        }
    }
    public static void main(String[] args){
        // String[] arr = new String[5];
        String[] arr = {"flower","flow","flight"};
        longestPrefix(arr);

    }
}