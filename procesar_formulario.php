<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $to = "tu-email@ejemplo.com"; // Cambia esto por tu dirección de correo electrónico
    $headers = "From: $email";

    $mail_sent = mail($to, $subject, $message, $headers);

    if ($mail_sent) {
        echo "Mensaje enviado con éxito.";
    } else {
        echo "Hubo un error al enviar el mensaje.";
    }
}
?>