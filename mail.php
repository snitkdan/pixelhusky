<?php

  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $body = "$message";
  $from = "thelastdan1@gmail.com";
  $to = "snitkdan@uw.edu";
  $subject = "Website Contact Form!";

  mail ($to, $subject, $body, $from));
  echo "<p>Your message has been sent!</p>";

?>
