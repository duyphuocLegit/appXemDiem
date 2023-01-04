<?php
	session_start();
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
	if(mysqli_num_rows($query_output) > 0)
	{
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
			$Message="Sai mật khẩu";
		}
		$Response[]=array("Message"=>$Message);
		echo json_encode($Response);
	}
	else
	{
		$Message="Tài khoản không tồn tại";
		$Response[]=array("Message"=>$Message);
		echo json_encode($Response);
	}
?>