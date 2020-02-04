package exigram.is.exigramproject.utils;

import java.util.Random;

public class RecoverPasswordUtil {

    public static String getRecoverPassword() {
        Random randomGenerator = new Random();
        String recoverPassword = "";
        recoverPassword += randomGenerator.nextInt(26) + 'A';
        for(int i = 0; i < 9; i++) {
            int type = randomGenerator.nextInt(3);
            switch(type) {
                case 0: recoverPassword += randomGenerator.nextInt(10);
                        break;
                case 1: recoverPassword += randomGenerator.nextInt(26) + 'a';
                        break;
                case 2: recoverPassword += randomGenerator.nextInt(26) + 'A';
                        break;
                default:break;
            }
        }
        recoverPassword += randomGenerator.nextInt(10);
        recoverPassword += randomGenerator.nextInt(26) + 'a';
        return recoverPassword;
    }

}