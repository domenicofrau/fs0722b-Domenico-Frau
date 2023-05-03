package esercizio02;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

public class Main2 {

	public static void main(String[] args) {
		
		int n = 5;
        List<Integer> list = listaRandom(n);
        System.out.println("Lista originale: " + list);

        System.out.println( "------------------------------------------------------" );
        
        List<Integer> newList = duplicaLista(list);
        System.out.println("Nuova lista: " + newList);

        System.out.println( "------------------------------------------------------" );
        
        boolean isEven = true;
        pariDispari(newList, isEven);

	}
	
	public static List<Integer> listaRandom(int n) {
        List<Integer> list = new ArrayList<>();
        Random rand = new Random();
        for (int i = 0; i < n; i++) {
            list.add(rand.nextInt(101));
        }
        Collections.sort(list);
        return list;
    }

    public static List<Integer>  duplicaLista(List<Integer> list) {
        List<Integer> newList = new ArrayList<>(list);
        newList.addAll(new ArrayList<>(list));
        Collections.reverse(newList);
        return newList;
    }

    public static void pariDispari(List<Integer> list, boolean isEven) {
        System.out.print("Valori in posizioni ");
        if (isEven) {
            System.out.print("pari: ");
        } else {
            System.out.print("dispari: ");
        }
        for (int i = 0; i < list.size(); i++) {
            if (isEven && i % 2 == 0) {
                System.out.print(list.get(i) + " ");
            } else if (!isEven && i % 2 != 0) {
                System.out.print(list.get(i) + " ");
            }
        }
    }

}
