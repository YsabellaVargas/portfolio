<?php
$contact = "ysabella.v@hotmail.com";
$responseSubject = "Uw e-mail is ontvangen";
$responseMessage = "Uw is e-mail ontvangen.\nU kunt een reactie verwachten binnen 2 werkdagen, zo niet probeer dan nog een keer contact op te nemen: " . $contact;

if (isset($_POST['email'])) {
  $to = "ysabella.v@hotmail.com";

  $subject = $_POST['subject'];
  $name = $_POST['firstname'];
  $email = $_POST['email'];
  $message = $_POST['comment'];

  // echo $message = mysql_real_escape_string($message);

$email_message = "My name is " . $name . "\n \n" . $message . " \n \n from " . $name . " \n and my email is ". $email;
$email_response= "Beste " . $name . ",\n \n" . $responseMessage . " \n \n Met vriendelijke groet, \n Ysabella Vargas Reyes" ;

$headers = 'From: ysabella.v@hotmail.com' . "\r\n" .
  'Reply-To: ysabella.v@hotmail.com' . "\r\n" .
  'X-Mailer: PHP/' . phpversion();
$mail = mail($to, $subject, $email_message, $headers);
if ($mail) {
  $response = mail($email, $responseSubject, $email_response, $headers);
  echo "<script>alert('U mail is verzonden');
  window.location='../index.html'</script>";
}else{
echo "<script>alert('U mail is niet verzonden probeer het later opnieuw');
  window.location='../index.html'</script>";
}};
?>
