import java.util.Scanner;

class abc {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();

        System.out.print(s.replace(" ", ","));
        sc.close();
    }
    }