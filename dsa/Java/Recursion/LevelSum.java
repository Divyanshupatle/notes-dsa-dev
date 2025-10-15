import  java.util.*;

class LevelSum {
    class Node{
        int val;
        Node left;
        Node right;

        public Node(int val) {
            this.val = val;
            left = null;
            right = null;
        }
    }

    public int levelSumDiffrence(Node node){
        if(node == null) return 0;

        Queue<Node> q = new ArrayDeque<>();

        int level = 1;
        int oddSum = 0;
        int evenSum = 0;

        q.add(node);

        while(q.size() > 0){
            int qsize = q.size();

            for(int i=0; i<qsize; i++){
                Node temp = q.remove();

                if(temp.left != null) q.add(temp.left);
                if(temp.right != null) q.add(temp.right);

                if(level % 2 == 1){
                    oddSum += temp.val;
                }
                else{
                    evenSum += temp.val;
                }
            }
            level++;
        }

        return oddSum - evenSum;

    }

    public int dfs(Node root, int level){
        if(root == null) return 0;

        if(level % 2 == 1){
            return root.val + dfs(root.left, level+1) + dfs(root.left, level+1);
        }
        else{
            return -root.val + dfs(root.left, level+1) + dfs(root.left, level+1);
        }
    }

    

    public static void main(String[] args){
    }
}