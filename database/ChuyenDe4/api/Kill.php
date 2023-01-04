<?php
	session_start();
	
	include '../ketnoi.php';
	mysqli_set_charset($ketnoi,'UTF8');
	
	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);

	$kill = $obj['kill'];
	
	if($kill == 'true')
	{
		session_destroy();
		$Message="true";
	}
	$Response[]=array("Message"=>$Message);
	echo json_encode($Response);
?>