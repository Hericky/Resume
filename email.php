<html>
<head>
</head>
<body>
	<?php
	require 'PHPMailer-master/class.phpmailer.php';
	require 'PHPMailer-master/PHPMailerAutoload.php';
	require 'PHPMailer-master/class.smtp.php';
	$mail = new PHPMailer;
	$mail->isSMTP();                                      // Set mailer to use SMTP
	$mail->Host = 'a2plcpnl0580.prod.iad2.secureserver.net';                 // Specify main and backup server
	$mail->Port = 465;                                    // Set the SMTP port
	$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = 'yijunhe@rickyresumes.com';                // SMTP username
	$mail->Password = 'He01030922';                  // SMTP password
	$mail->SMTPSecure = 'ssl';                            // Enable encryption, 'ssl' also accepted

	$mail->From = $_POST['email'];
	$mail->FromName = $_POST['Name'];
	$mail->AddAddress('yijunhe@email.arizona.edu', $_POST['Position']);  // Add a recipient

	$mail->IsHTML(true);                                  // Set email format to HTML

	$mail->Subject = $_POST['CompanyName'];
	$mail->Body    = 'This is the HTML message body <strong>in bold!</strong>';
	$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

	echo 'Message has been sent';
	header('Location: http://rickyresumes.com/');
	?>
</body>
</html>