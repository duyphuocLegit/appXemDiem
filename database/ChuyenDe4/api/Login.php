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

	$tentk = $obj['tentk'];
	$matkhau = $obj['matkhau'];
	
	$query = 'SELECT A.MaSV, A.MaLop, A.TenTK, B.MatKhau 
			FROM sinhvien as A, taikhoan as B
			WHERE A.TenTk = B.TenTK
			AND A.TenTK="'.$tentk.'"';
	$query_output =  mysqli_query($ketnoi,$query);
	$row = mysqli_fetch_assoc($query_output);
	$row_matkhau = $row['MatKhau'];
	$row_malop = $row['MaLop'];
	$row_masv = $row['MaSV'];
	if($matkhau == $row_matkhau)
	{
		$Message="true";
		$_SESSION['malop'] = $row_malop;
		$_SESSION['masv'] = $row_masv;
	}
	else
	{
		$Message="Tên tài khoản hoặc mật khẩu không đúng";
	}
	$Response[]=array("Message"=>$Message);
	echo json_encode($Response);
?>