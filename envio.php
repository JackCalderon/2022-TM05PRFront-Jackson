<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

$mail = new PHPMailer(true);

try{
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'calderonjacksonet36@gmail.com';                     //SMTP username
    $mail->Password   = 'jacksito95107329';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom($_POST['name'],$_POST['ape'],$_POST['asunto'],$_POST['mail'], $_POST['message']);
    $mail->addAddress('calderonjackson05@gmail.com');     //Add a recipient //Name is optional

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject='Enviado por '.$_POST['name'];
    $mail->Body = '<h1 align=center>Nombre: '.$_POST['name'].'<br>Apellido: '.$_POST['ape'].'<br>Asunto: '.$_POST['asunto'].'<br>Mail: '.$_POST['mail'].'<br>Mensaje: '.$_POST['message'].'</h1>';
    
    //$mail->Subject = 'Asunto';
    //$mail->Body    = 'Correo de prueba';

    if(!$mail->send()) {
    $result="Algo esta mal, intentelo de nuevo";
    }
    else{
    $result="Gracias ".$_POST['name']."por contactarnos, espera la respuesta muy pronto";
    }

}
?>