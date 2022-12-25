<?php
	session_start();
	header("Access-Control-Allow-Headers: Authorization, Content-Type");
	header("Access-Control-Allow-Origin: *");
	header('content-type: application/json; charset=utf-8');
	header("Access-Control-Allow-Methods: PUT, GET, POST");
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