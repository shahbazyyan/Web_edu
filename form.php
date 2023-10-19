<?php
$userName = $_POST["name"];
$user_email = $_POST["email"];
$email_subject = $_POST["subject"];
$user_massage = $_POST["massage"];

$email_from = "mywebsite@gmail.com"
$email_subject = "New Form Submission";

$email_body = "User Name: $userName.\n".
              "User Email: $user_email.\n".
              "Subject: $email_subject.\n".
              "Massage: $user_massage.\n";

$to = "shahbazyan.daviit@gmail.com";
$headers = "From: $email_from \r\n";
$headers .= "From: $user_email \r\n";

mail($to, $email_subject,$email_body,$headers);

header("Location: contact.html");

?>