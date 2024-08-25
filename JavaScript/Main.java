import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {
        int[] arr1 = {1,3,5,7,9};
        int[] arr2 = {2,4,6,8};
        
        int i = 0;
        int j = 0;
        
        ArrayList<Integer> list = new ArrayList<>();
        
        while(i<arr1.length && j <arr2.length) {
            
            if (arr1[i] < arr2[j]){
                list.add(arr1[i]);
                i++;
            }else if (arr1[i] > arr2[j]){
                list.add(arr2[j]);
                j++;
            }else {
              list.add(arr1[i]);
              i++;
              j++;
            }
        }
        
        while(i<arr1.length){
            list.add(arr1[i]);
            i++;
        }
        
        while(j<arr2.length) {
            list.add(arr2[j]);
            j++;
        }
        
        System.out.println(list);
    }
}