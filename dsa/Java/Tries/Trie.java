class Trie {
    static class Node{
        Node[] children;
        boolean eow;
    
        public Node() {
            children = new Node[26];
            eow = false;
    
            for(int i=0; i<26; i++){
                children[i] = null;
            }
        }
    }
    
    static Node root = new Node();

    public static void insert(String word){
        Node curr = root;
        for(int i=0; i<word.length(); i++){
            int idx = word.charAt(i) - 'a';

            if(curr.children[idx] == null){
                curr.children[idx] = new Node();
            }

            if(i == word.length() -1){
                curr.children[idx].eow = true;
            }

            curr = curr.children[idx];
        }

    }

    public static boolean search(String word){
        Node curr = root;
        for(int i=0; i<word.length(); i++){
            int idx = word.charAt(i) - 'a';

            if(curr.children[idx] == null){
                return false;
            }
            // if(i == word.length()-1 && curr.children[idx].eow == false){
            //     return false;
            // }

            curr = curr.children[idx];
        }

        return true;
    }
    public static boolean breakingWordSearch(String word){
        Node curr = root;
        String str = "";

        for(int i=0; i<word.length(); i++){
            int idx = word.charAt(i) - 'a';

            if(curr.children[idx] != null)

            curr = curr.children[idx];
        }

        return true;
    }
    
    public static void main(String[] args){
        System.out.print("runing ");
        // String[] words = {"the", "a", "their", "there", "any"};
        
        // for(int i=0; i<words.length; i++){
        //     insert(words[i]);
        // }

        // breaking word
        insert("ilikesamsung");

        System.out.print(search("i"));
    }
}