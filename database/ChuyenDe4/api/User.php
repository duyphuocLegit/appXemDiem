<?php
	session_start();
	header("Access-Control-Allow-Headers: Authorization, Content-Type");
	header("Access-Control-Allow-Origin: *");
	header('content-type: application/json; charset=utf-8');
	header("Access-Control-Allow-Methods: PUT, GET, POST");
	include '../ketnoi.php';
	mysqli_set_charset($ketnoi,'UTF8');
	
	if(isset($_SESSION['masv']))
	{
		$masv = $_SESSION['masv'];
		$data = 'SELECT *, DATE_FORMAT(NgaySinh, "%d/%m/%Y") AS NgaySinhFM
				FROM sinhvien
				WHERE MaSV="'.$masv.'"
				';
		$rs_data = mysqli_query($ketnoi,$data);
		while($row_data = mysqli_fetch_assoc($rs_data))
		{
			$array[] = $row_data;
			$json2 = json_encode($array,JSON_UNESCAPED_SLASHES|JSON_PRETTY_PRINT|JSON_NUMERIC_CHECK);
		}
		echo $json2;
	}
?>