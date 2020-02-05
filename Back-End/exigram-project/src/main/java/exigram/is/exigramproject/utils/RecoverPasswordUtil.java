package exigram.is.exigramproject.utils;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

public class RecoverPasswordUtil {

    public static String getRecoverPassword() {
        Random randomGenerator = new Random();
        String recoverPassword = "";
        recoverPassword += (char) (randomGenerator.nextInt(26) + 'A');
        for(int i = 0; i < 9; i++) {
            int type = randomGenerator.nextInt(3);
            switch(type) {
                case 0: recoverPassword += (char) (randomGenerator.nextInt(10) + '0');
                        break;
                case 1: recoverPassword += (char) (randomGenerator.nextInt(26) + 'a');
                        break;
                case 2: recoverPassword += (char) (randomGenerator.nextInt(26) + 'A');
                        break;
                default:break;
            }
        }
        recoverPassword += (char) (randomGenerator.nextInt(10) + '0');
        recoverPassword += (char) (randomGenerator.nextInt(26) + 'a');
        return recoverPassword;
    }

    public static SimpleMailMessage createMail(String to, String recoverPassword) {
        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo(to);
        message.setSubject("Recupero Password");
        message.setText("Salve, questa mail è stata generata automaticamente da Exigram.\nHai richiesto il recupero password con successo, abbiamo modificato la tua password presente alla fine di questo messaggio così da poterti permettere l'accesso!\nTi consigliamo di cambiarla nuovamente dopo aver effettuato il login: " + recoverPassword);
        return message;
    }

}