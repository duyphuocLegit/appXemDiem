-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 25, 2022 at 10:46 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.0.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chuyende4`
--

-- --------------------------------------------------------

--
-- Table structure for table `diem`
--

CREATE TABLE `diem` (
  `STT` int(2) NOT NULL,
  `MaSV` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `MaMon` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `diem` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `diem`
--

INSERT INTO `diem` (`STT`, `MaSV`, `MaMon`, `diem`) VALUES
(1, '1', 'MH01', 6),
(2, '1', 'MH02', 9),
(3, '1', 'MH03', 9),
(4, '2', 'MH01', 7),
(5, '2', 'MH02', 6),
(6, '2', 'MH03', 7),
(7, '3', 'MH01', 8),
(8, '3', 'MH02', 8),
(9, '3', 'MH03', 7),
(10, '4', 'MH04', 10),
(11, '4', 'MH05', 7),
(12, '4', 'MH06', 9),
(13, '5', 'MH04', 6),
(14, '5', 'MH05', 8),
(15, '5', 'MH06', 9);

-- --------------------------------------------------------

--
-- Table structure for table `lop`
--

CREATE TABLE `lop` (
  `MaLop` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `TenLop` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `lop`
--

INSERT INTO `lop` (`MaLop`, `TenLop`) VALUES
('CT20CD31', 'Công nghệ thông tin'),
('QT20CD31', 'Quản trị mạng');

-- --------------------------------------------------------

--
-- Table structure for table `monhoc`
--

CREATE TABLE `monhoc` (
  `MaMon` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `TenMon` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `MaLop` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `monhoc`
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
-- Table structure for table `sinhvien`
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
-- Dumping data for table `sinhvien`
--

INSERT INTO `sinhvien` (`MaSV`, `TenSV`, `NgaySinh`, `GioiTinh`, `Email`, `SDT`, `MaLop`, `TenTK`, `hinh`) VALUES
('1', 'Nguyễn Văn A', '2002-05-16', 'Nam', 'ngvana@gmail.com', 1162786378, 'CT20CD31', 'CT20CD311', 'billgates.jpeg'),
('2', 'Tran Hoang ', '2002-03-12', 'Nam', 'trhoang@gmail.com', 62352183, 'CT20CD31', 'CT20CD312', 'elon_musk.jpeg'),
('3', 'Lý Ngọc', '2022-12-01', 'Nữ', 'lyngoc@gmail.com', 37463272, 'CT20CD31', 'CT20CD313', 'joe_belfiore.jpeg'),
('4', 'Phạm Văn B', '2022-12-04', 'Nam', 'phvanb@gmail.com', 746273829, 'QT20CD31', 'QT20CD311', 'joe_biden.jpeg'),
('5', 'Văn Nam', '2022-12-28', 'Nam', 'vannam@gmail.com', 376432673, 'QT20CD31', 'QT20CD312', 'mark.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `taikhoan`
--

CREATE TABLE `taikhoan` (
  `TenTK` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `MatKhau` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `taikhoan`
--

INSERT INTO `taikhoan` (`TenTK`, `MatKhau`) VALUES
('CT20CD311', 'abcd'),
('CT20CD312', 'abcd'),
('CT20CD313', 'abcd'),
('QT20CD311', 'abcd'),
('QT20CD312', 'abcd');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `diem`
--
ALTER TABLE `diem`
  ADD PRIMARY KEY (`STT`),
  ADD KEY `MaSV` (`MaSV`,`MaMon`),
  ADD KEY `MaMon` (`MaMon`);

--
-- Indexes for table `lop`
--
ALTER TABLE `lop`
  ADD PRIMARY KEY (`MaLop`);

--
-- Indexes for table `monhoc`
--
ALTER TABLE `monhoc`
  ADD PRIMARY KEY (`MaMon`),
  ADD KEY `MaLop` (`MaLop`);

--
-- Indexes for table `sinhvien`
--
ALTER TABLE `sinhvien`
  ADD PRIMARY KEY (`MaSV`),
  ADD KEY `MaLop` (`MaLop`),
  ADD KEY `TenTK` (`TenTK`);

--
-- Indexes for table `taikhoan`
--
ALTER TABLE `taikhoan`
  ADD PRIMARY KEY (`TenTK`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `diem`
--
ALTER TABLE `diem`
  MODIFY `STT` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `diem`
--
ALTER TABLE `diem`
  ADD CONSTRAINT `diem_ibfk_1` FOREIGN KEY (`MaMon`) REFERENCES `monhoc` (`MaMon`) ON UPDATE CASCADE,
  ADD CONSTRAINT `diem_ibfk_2` FOREIGN KEY (`MaSV`) REFERENCES `sinhvien` (`MaSV`) ON UPDATE CASCADE;

--
-- Constraints for table `monhoc`
--
ALTER TABLE `monhoc`
  ADD CONSTRAINT `monhoc_ibfk_1` FOREIGN KEY (`MaLop`) REFERENCES `lop` (`MaLop`) ON UPDATE CASCADE;

--
-- Constraints for table `sinhvien`
--
ALTER TABLE `sinhvien`
  ADD CONSTRAINT `sinhvien_ibfk_2` FOREIGN KEY (`MaLop`) REFERENCES `lop` (`MaLop`) ON UPDATE CASCADE,
  ADD CONSTRAINT `sinhvien_ibfk_3` FOREIGN KEY (`TenTK`) REFERENCES `taikhoan` (`TenTK`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
