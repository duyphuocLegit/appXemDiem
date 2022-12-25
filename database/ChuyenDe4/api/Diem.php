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

	$tenmon = $obj['tenmon'];
	
	if(isset($_SESSION['malop']))
	{
		$malop = $_SESSION['malop'];
		$data = 'SELECT B.MaLop, B.TenTK, B.TenSV, C.TenMon, A.diem
				FROM diem as A, sinhvien as B, monhoc as C
				WHERE A.MaSV = B.MaSV
				AND A.MaMon = C.MaMon
				AND B.MaLop="'.$malop.'"
				AND C.TenMon="'.$tenmon.'"
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