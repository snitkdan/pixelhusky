<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $body = "From:\n" + $email + "\nMessage:\n" + $message;
  $from = $email;
  $to = "snitkdan@uw.edu";
  $subject = "Website Contact Form";

  if($_POST['submit']){
    if(mail ($to, $subject, $body, $from)){
      echo "<p>Your message has been sent!</p>"
    } else{
      echo "<p><Something went wrong, go back and try again./p>"
    }
  }

 ?>
