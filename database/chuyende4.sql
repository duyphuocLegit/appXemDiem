-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th1 05, 2023 lúc 03:33 PM
-- Phiên bản máy phục vụ: 10.4.25-MariaDB
-- Phiên bản PHP: 8.0.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `chuyende4`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `diem`
--

CREATE TABLE `diem` (
  `STT` int(2) NOT NULL,
  `MaSV` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `MaMon` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `diem` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `diem`
--

INSERT INTO `diem` (`STT`, `MaSV`, `MaMon`, `diem`) VALUES
(1, 'CT20CD311', 'MH01', 6),
(2, 'CT20CD311', 'MH02', 9),
(3, 'CT20CD311', 'MH03', 9),
(4, 'CT20CD312', 'MH01', 7),
(5, 'CT20CD312', 'MH02', 6),
(6, 'CT20CD312', 'MH03', 7),
(7, 'CT20CD313', 'MH01', 8),
(8, 'CT20CD313', 'MH02', 8),
(9, 'CT20CD313', 'MH03', 7),
(10, 'QT20CD311', 'MH04', 10),
(11, 'QT20CD311', 'MH05', 7),
(12, 'QT20CD311', 'MH06', 9),
(13, 'QT20CD312', 'MH04', 6),
(14, 'QT20CD312', 'MH05', 8),
(15, 'QT20CD312', 'MH06', 9),
(16, 'CT20CD314', 'MH01', 5),
(17, 'CT20CD314', 'MH02', 7),
(18, 'CT20CD314', 'MH03', 8),
(19, 'CT20CD315', 'MH01', 7),
(20, 'CT20CD315', 'MH02', 7),
(21, 'CT20CD315', 'MH03', 8),
(22, 'CT20CD316', 'MH01', 7),
(23, 'CT20CD316', 'MH02', 7),
(24, 'CT20CD316', 'MH03', 8),
(25, 'CT20CD317', 'MH01', 7),
(26, 'CT20CD317', 'MH02', 7),
(27, 'CT20CD317', 'MH03', 8),
(28, 'QT20CD314', 'MH01', 7),
(29, 'QT20CD314', 'MH02', 7),
(30, 'QT20CD314', 'MH03', 8),
(31, 'QT20CD315', 'MH01', 6),
(32, 'QT20CD315', 'MH02', 7),
(33, 'QT20CD315', 'MH03', 10),
(34, 'QT20CD316', 'MH01', 7),
(35, 'QT20CD316', 'MH02', 7),
(36, 'QT20CD316', 'MH03', 8),
(37, 'QT20CD317', 'MH01', 7),
(38, 'QT20CD317', 'MH02', 5),
(39, 'QT20CD317', 'MH03', 8),
(40, 'CT20CD318', 'MH01', 6),
(41, 'CT20CD318', 'MH02', 6),
(42, 'CT20CD318', 'MH03', 8),
(43, 'CT20CD319', 'MH01', 6),
(44, 'CT20CD319', 'MH02', 7),
(45, 'CT20CD319', 'MH03', 9),
(46, 'CT20CD3110', 'MH01', 6),
(47, 'CT20CD3110', 'MH02', 7),
(48, 'CT20CD3110', 'MH03', 9),
(49, 'CT20CD3111', 'MH01', 8),
(50, 'CT20CD3111', 'MH02', 6),
(51, 'CT20CD3111', 'MH03', 7),
(52, 'CT20CD3112', 'MH01', 9),
(53, 'CT20CD3112', 'MH02', 6),
(54, 'CT20CD3112', 'MH03', 7),
(55, 'CT20CD3113', 'MH01', 6),
(56, 'CT20CD3113', 'MH02', 7),
(57, 'CT20CD3113', 'MH03', 9),
(58, 'CT20CD3114', 'MH01', 6),
(59, 'CT20CD3114', 'MH02', 7),
(60, 'CT20CD3114', 'MH03', 9),
(61, 'CT20CD3115', 'MH01', 8),
(62, 'CT20CD3115', 'MH02', 6),
(63, 'CT20CD3115', 'MH03', 7),
(64, 'QT20CD313', 'MH01', 9),
(65, 'QT20CD313', 'MH02', 6),
(66, 'QT20CD313', 'MH03', 7);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lop`
--

CREATE TABLE `lop` (
  `MaLop` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `TenLop` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `lop`
--

INSERT INTO `lop` (`MaLop`, `TenLop`) VALUES
('CT20CD31', 'Công nghệ thông tin'),
('QT20CD31', 'Quản trị mạng');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `monhoc`
--

CREATE TABLE `monhoc` (
  `MaMon` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `TenMon` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `MaLop` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `monhoc`
--

INSERT INTO `monhoc` (`MaMon`, `TenMon`, `MaLop`) VALUES
('MH01', 'Lập trình Windows', 'CT20CD31'),
('MH02', 'Cơ sỏ dữ liệu', 'CT20CD31'),
('MH03', 'React Native', 'CT20CD31'),
('MH04', 'Quản trị mạng 1', 'QT20CD31'),
('MH05', 'Quản trị mạng 2', 'QT20CD31'),
('MH06', 'Quản trị mạng 3', 'QT20CD31');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sinhvien`
--

CREATE TABLE `sinhvien` (
  `MaSV` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `TenSV` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `NgaySinh` date NOT NULL,
  `GioiTinh` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `Email` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `SDT` int(11) DEFAULT NULL,
  `MaLop` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `TenTK` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `hinh` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sinhvien`
--

INSERT INTO `sinhvien` (`MaSV`, `TenSV`, `NgaySinh`, `GioiTinh`, `Email`, `SDT`, `MaLop`, `TenTK`, `hinh`) VALUES
('CT20CD311', 'Nguyễn Văn A', '2002-05-16', 'Nam', 'ngvana@gmail.com', 1162786378, 'CT20CD31', 'CT20CD311', 'billgates.jpeg'),
('CT20CD3110', 'Ngọc Hương', '2002-01-08', 'Nữ', 'ngocbich@gmail.com', 83473992, 'CT20CD31', 'CT20CD3110', NULL),
('CT20CD3111', 'Văn Quang', '2002-01-08', 'Nam', 'vanquang@gmail.com', 83473992, 'CT20CD31', 'CT20CD3111', NULL),
('CT20CD3112', 'Yến Ly', '2002-01-08', 'Nữ', 'yenly@gmail.com', 83473992, 'CT20CD31', 'CT20CD3112', NULL),
('CT20CD3113', 'Văn Đại', '2002-01-08', 'Nam', 'vandai@gmail.com', 83473992, 'CT20CD31', 'CT20CD3113', NULL),
('CT20CD3114', 'Hoàng Yến', '2002-01-08', 'Nữ', 'hoangyen@gmail.com', 83473992, 'CT20CD31', 'CT20CD3114', NULL),
('CT20CD3115', 'Văn Hậu', '2002-01-08', 'Nam', 'vanhau@gmail.com', 83473992, 'CT20CD31', 'CT20CD3115', NULL),
('CT20CD312', 'Tran Hoang ', '2002-03-12', 'Nam', 'trhoang@gmail.com', 62352183, 'CT20CD31', 'CT20CD312', 'elon_musk.jpeg'),
('CT20CD313', 'Lý Ngọc', '2022-12-01', 'Nữ', 'lyngoc@gmail.com', 37463272, 'CT20CD31', 'CT20CD313', 'joe_belfiore.jpeg'),
('CT20CD314', 'Van Nam', '2002-01-20', 'Nam', 'vannam@gmail.com', 24984957, 'CT20CD31', 'CT20CD314', NULL),
('CT20CD315', 'Thu Nguyệt', '2002-01-07', 'Nữ', 'thunguyet@gmail.com', 82734869, 'CT20CD31', 'CT20CD315', NULL),
('CT20CD316', 'Văn Nghĩa', '2002-01-25', 'Nam', 'vannghia@gmail.com', 36273929, 'CT20CD31', 'CT20CD316', NULL),
('CT20CD317', 'Nguyen Hoang', '2002-01-10', 'Nam', 'nghoang@gmail.com', 23973242, 'CT20CD31', 'CT20CD317', NULL),
('CT20CD318', 'Ngọc Bích', '2002-01-08', 'Nữ', 'ngocbich@gmail.com', 83473992, 'CT20CD31', 'CT20CD318', NULL),
('CT20CD319', 'Đăng Quang', '2002-01-08', 'Nam', 'dangquang@gmail.com', 83473992, 'CT20CD31', 'CT20CD319', NULL),
('QT20CD311', 'Phạm Văn B', '2022-12-04', 'Nam', 'phvanb@gmail.com', 746273829, 'QT20CD31', 'QT20CD311', 'joe_biden.jpeg'),
('QT20CD312', 'Văn Nam', '2022-12-28', 'Nam', 'vannam@gmail.com', 376432673, 'QT20CD31', 'QT20CD312', 'mark.jpeg'),
('QT20CD313', 'Yến Ly', '2002-01-08', 'Nữ', 'yenly@gmail.com', 83473992, 'QT20CD31', 'QT20CD313', NULL),
('QT20CD314', 'My Ngoc', '2002-01-22', 'Nữ', 'myngoc@gmail.com', 327898986, 'QT20CD31', 'QT20CD314', NULL),
('QT20CD315', 'Hoài Phong', '2002-01-03', 'Nam', 'hoaiphong@gmail.com', 32847393, 'QT20CD31', 'QT20CD315', NULL),
('QT20CD316', 'Pham Hung', '2002-01-31', 'Nam', 'phhung@gmail.com', 23678647, 'QT20CD31', 'QT20CD316', NULL),
('QT20CD317', 'Kỳ Duyên', '2002-01-28', 'Nữ', 'kyduyen@gmail.com', 86732839, 'QT20CD31', 'QT20CD317', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `taikhoan`
--

CREATE TABLE `taikhoan` (
  `TenTK` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `MatKhau` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `taikhoan`
--

INSERT INTO `taikhoan` (`TenTK`, `MatKhau`) VALUES
('CT20CD311', 'abcd'),
('CT20CD3110', 'abcd'),
('CT20CD3111', 'abcd'),
('CT20CD3112', 'abcd'),
('CT20CD3113', 'abcd'),
('CT20CD3114', 'abcd'),
('CT20CD3115', 'abcd'),
('CT20CD312', 'abcd'),
('CT20CD313', 'abcd'),
('CT20CD314', 'abcd'),
('CT20CD315', 'abcd'),
('CT20CD316', 'abcd'),
('CT20CD317', 'abcd'),
('CT20CD318', 'abcd'),
('CT20CD319', 'abcd'),
('QT20CD311', 'abcd'),
('QT20CD312', 'abcd'),
('QT20CD313', 'abcd'),
('QT20CD314', 'abcd'),
('QT20CD315', 'abcd'),
('QT20CD316', 'abcd'),
('QT20CD317', 'abcd'),
('QT20CD318', 'abcd');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `diem`
--
ALTER TABLE `diem`
  ADD PRIMARY KEY (`STT`),
  ADD KEY `MaSV` (`MaSV`,`MaMon`),
  ADD KEY `MaMon` (`MaMon`);

--
-- Chỉ mục cho bảng `lop`
--
ALTER TABLE `lop`
  ADD PRIMARY KEY (`MaLop`);

--
-- Chỉ mục cho bảng `monhoc`
--
ALTER TABLE `monhoc`
  ADD PRIMARY KEY (`MaMon`),
  ADD KEY `MaLop` (`MaLop`);

--
-- Chỉ mục cho bảng `sinhvien`
--
ALTER TABLE `sinhvien`
  ADD PRIMARY KEY (`MaSV`),
  ADD KEY `MaLop` (`MaLop`),
  ADD KEY `TenTK` (`TenTK`);

--
-- Chỉ mục cho bảng `taikhoan`
--
ALTER TABLE `taikhoan`
  ADD PRIMARY KEY (`TenTK`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `diem`
--
ALTER TABLE `diem`
  MODIFY `STT` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `diem`
--
ALTER TABLE `diem`
  ADD CONSTRAINT `diem_ibfk_1` FOREIGN KEY (`MaMon`) REFERENCES `monhoc` (`MaMon`) ON UPDATE CASCADE,
  ADD CONSTRAINT `diem_ibfk_2` FOREIGN KEY (`MaSV`) REFERENCES `sinhvien` (`MaSV`) ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `monhoc`
--
ALTER TABLE `monhoc`
  ADD CONSTRAINT `monhoc_ibfk_1` FOREIGN KEY (`MaLop`) REFERENCES `lop` (`MaLop`) ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `sinhvien`
--
ALTER TABLE `sinhvien`
  ADD CONSTRAINT `sinhvien_ibfk_2` FOREIGN KEY (`MaLop`) REFERENCES `lop` (`MaLop`) ON UPDATE CASCADE,
  ADD CONSTRAINT `sinhvien_ibfk_3` FOREIGN KEY (`TenTK`) REFERENCES `taikhoan` (`TenTK`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
