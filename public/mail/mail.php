<?

	header('Content-Type: text/html; charset=utf-8');

	require 'Exception.php';
	require 'PHPMailer.php';
	require 'SMTP.php';

	$subject = "[와우킹 문의메일] ".$_POST['title']."";
	$message = 	"이름 : ".$_POST['name'].
				"<br>성별 : ".$_POST['man'].$_POST['woman'].
				"<br>연락처 : ".$_POST['tel'].
				"<br>차량선택 : ".$_POST['car'].
				"<br>희망시간대 : ".$_POST['time'].
				"<br>연수지역 : ".$_POST['address'].
				"<br>문의내용 : ".$_POST['context'];

	$mail = new \PHPMailer\PHPMailer\PHPMailer(true);

try {
//    $mail->SMTPDebug = 2;
    $mail->isSMTP(); 
    $mail->Host = 'smtp.naver.com';
    $mail->SMTPAuth = true; 
    $mail->SMTPSecure = 'ssl'; 
    $mail->Username = 'jgh8988';// SMTP username
    $mail->Password = 'jgh@289989';// SMTP password
    $mail->Port = 465; 
	$mail->CharSet = 'utf-8';

    //Recipients
    $mail->setFrom('jgh8988@naver.com', '와우킹드라이브');
	$mail->addAddress('jgh8988@naver.com', '와우킹드라이브');


    //Content
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = $message;
    $mail->send();
?>
   
<script>
	alert("문의메일이 전송되었습니다.");
	location.replace("/");
</script>

<?
} catch (Exception $e) {
?>
<script>
	alert("문의메일이 전송실패하였습니다.");
	location.replace("/");
</script>
<?
}
?>