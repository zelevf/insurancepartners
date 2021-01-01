<?php

$name = $_POST['name'];
$email = $_POST['email'];
$consulta = $_POST['consulta'];
$respuesta = $_POST['Consulta enviada'];


$header = "From: " . $email . "\r\n";
$header .= "X-Mailer: php/" . phpversion() . "\r\n";
$header .= "MIME-Version: 1.0 \r\n";
$header .= "Content-type: text/plain"; 

$consulta = "Mensaje enviado por: " . $name . "\r\n";
$consulta .= "Su email es: " . $email . "\r\n";
$consulta .= "Su consulta es: " . $_POST['consulta'] . "\r\n";
$consulta .= "Mensaje enviado el: " . date('d/m/y', time());

$para = 'fernandoveleze@gmail.com';
$asunto = 'Consulta realizada a Insurance Partners';

mail($para, $asunto, utf8_decode($consulta), $header);

header("Location:/");
?>