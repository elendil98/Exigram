-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: db_exigram
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `account_non_expired` bit(1) NOT NULL,
  `account_non_locked` bit(1) NOT NULL,
  `credentials_non_expired` bit(1) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `enabled` bit(1) NOT NULL,
  `is_admin` bit(1) NOT NULL,
  `password` varchar(60) NOT NULL,
  `username` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_sb8bbouer5wak8vyiiy4pf2bx` (`username`),
  UNIQUE KEY `UK_ob8kqyqqgmefl0aco34akdtpe` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,_binary '',_binary '',_binary '',NULL,_binary '',_binary '','$2a$10$OziSmJHbNAV/gGAsx5ZDDOaP1nCP0PEosqNRRVdvmtxFiS80cypce','admin'),(2,_binary '',_binary '',_binary '','davide.iannaccone98@hotmail.com',_binary '',_binary '\0','$2a$10$ZUr3QmXnG2KpevCzn0Fgpu1E7kfjKaW424ChNVgckfm/MSCJQh3nW','username'),(3,_binary '',_binary '',_binary '','d.esposito58@studenti.unisa.it',_binary '',_binary '\0','$2a$10$rIv.Puh6.tyEtI4kdor72OOBx5cPNH.HwGtHHEdS7.b6Ktashvbby','blaxdo'),(4,_binary '',_binary '',_binary '','federico.carpentieri@gmail.com',_binary '',_binary '\0','$2a$10$HlgaXTGRzpPVED/dk0.PRelmm8Swd87KWlyxRandAlkYIAm6cv2/a','fed&'),(5,_binary '',_binary '',_binary '','roberto.iannaccone@gmail.com',_binary '',_binary '\0','$2a$10$/vO/ndhaB50pY6.rPfq2Z.hVvzWKmUl6jfOvE5w3TteX/B3h/i.bm','roberto.iannaccone@gmail.com'),(6,_binary '',_binary '',_binary '','prova@gmail.com',_binary '',_binary '\0','$2a$10$s.URlp02bWOKJWSq3.ItquTWYDFzK6d00E.A1KabR.QUhXIkoXY0C','prova@gmail.com'),(7,_binary '',_binary '',_binary '','lorenzocarpentieri34@gmail.com',_binary '',_binary '\0','$2a$10$l00TdntDCPJ4oofA8XKGX.SiqbeKIu7Dlolfr2t56t0vlKxzdfaNa','lorenzocarpentieri34@gmail.com'),(10,_binary '',_binary '',_binary '','domenico.iannaccone@gmail.com',_binary '',_binary '\0','$2a$10$c2yZPvwHAjnsKySvIsFzxuary7JkuWT5Try0.Zoe8yF4YsBURPAM6','domenico.iannaccone@gmail.com'),(14,_binary '',_binary '',_binary '','rob@gmail.com',_binary '',_binary '\0','$2a$10$x6UE3DFAnSSMLRx.px7sdO3AyjnS6TRXte0DqnCK/6cpHGdVX7a1W','blaxdo_2'),(16,_binary '',_binary '',_binary '','emailpro@gmail.com',_binary '',_binary '\0','$2a$10$H5E1k4Cl4kgKahHhZ5XBPesk/iBOucs1i7XVOixr5F4UiQp0O7kD2','daesauto'),(17,_binary '',_binary '',_binary '','emaildiprova@gmail.com',_binary '',_binary '\0','$2a$10$8il7PsFbGazSVyB1w.Ucyeg0BZvbrKvSeu33N3nU23NGZooWv0Ika','doiacco');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-17 21:09:33
