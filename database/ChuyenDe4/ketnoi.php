<?php
	$sever = 'localhost';
	$user = 'root';
	$pass = '';
	$dbname = 'chuyende4';
	$ketnoi = mysqli_connect($sever, $user, $pass, $dbname);
	if(!$ketnoi)
	{
		die('Không kết nối được!');
	}
?>