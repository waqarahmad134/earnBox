-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 18, 2024 at 04:46 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `earnbox`
--

-- --------------------------------------------------------

--
-- Table structure for table `ads`
--

CREATE TABLE `ads` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `usage` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `packageId` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `ads`
--

INSERT INTO `ads` (`id`, `title`, `usage`, `createdAt`, `updatedAt`, `packageId`, `image`) VALUES
(1, 'BTC/USDT', '1.6', '2024-03-20 12:43:02', '2024-03-20 12:43:02', 1, 'https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/btc.png'),
(2, 'BTC/USDT', '3.3', '2024-03-20 12:43:49', '2024-03-20 12:43:49', 2, 'https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/btc.png'),
(3, 'BTC/USDT', '5', '2024-03-20 12:44:26', '2024-03-20 12:44:26', 3, 'https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/btc.png'),
(4, 'ETH/USDT', '1.6', '2024-03-20 12:43:02', '2024-03-20 12:43:02', 1, 'https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/eth.png'),
(5, 'USDT/USDT', '1.6', '2024-03-20 12:43:02', '2024-03-20 12:43:02', 1, 'https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/usdt.png'),
(6, 'BNB/USDT', '1.6', '2024-03-20 12:43:02', '2024-03-20 12:43:02', 1, 'https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/bnb.png'),
(7, 'ETH/USDT', '3.3', '2024-03-20 12:43:02', '2024-03-20 12:43:02', 2, 'https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/eth.png'),
(8, 'USDT/USDT', '3.3', '2024-03-20 12:43:02', '2024-03-20 12:43:02', 2, 'https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/usdt.png'),
(9, 'BNB/USDT', '3.3', '2024-03-20 12:43:02', '2024-03-20 12:43:02', 2, 'https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/bnb.png'),
(10, 'ETH/USDT', '5', '2024-03-20 12:43:02', '2024-03-20 12:43:02', 3, 'https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/eth.png'),
(11, 'USDT/USDT', '5', '2024-03-20 12:43:02', '2024-03-20 12:43:02', 3, 'https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/usdt.png'),
(12, 'BNB/USDT', '5', '2024-03-20 12:43:02', '2024-03-20 12:43:02', 3, 'https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/bnb.png');

-- --------------------------------------------------------

--
-- Table structure for table `earnings`
--

CREATE TABLE `earnings` (
  `id` int(11) NOT NULL,
  `paid` varchar(255) DEFAULT NULL,
  `amount` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `adId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `earnings`
--

INSERT INTO `earnings` (`id`, `paid`, `amount`, `createdAt`, `updatedAt`, `adId`, `userId`) VALUES
(41, NULL, '0.6599999999999999', '2024-05-18 14:32:46', '2024-05-18 14:32:46', 7, 3),
(42, NULL, '0.5333333333333333', '2024-05-18 14:34:09', '2024-05-18 14:34:09', 4, 3),
(43, NULL, '0.5333333333333333', '2024-05-18 14:34:30', '2024-05-18 14:34:30', 5, 3);

-- --------------------------------------------------------

--
-- Table structure for table `otpverifications`
--

CREATE TABLE `otpverifications` (
  `id` int(11) NOT NULL,
  `OTP` varchar(5) DEFAULT NULL,
  `reqAt` datetime DEFAULT NULL,
  `expiryAt` datetime DEFAULT NULL,
  `verifiedInForgetCase` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `otpverifications`
--

INSERT INTO `otpverifications` (`id`, `OTP`, `reqAt`, `expiryAt`, `verifiedInForgetCase`, `createdAt`, `updatedAt`, `userId`) VALUES
(1, '4463', '2024-03-19 15:40:17', NULL, 0, '2024-03-19 15:40:17', '2024-03-19 15:40:17', 1),
(2, '2084', '2024-03-19 15:41:07', NULL, 0, '2024-03-19 15:41:07', '2024-03-19 15:41:07', 2),
(3, '2347', '2024-03-19 16:16:33', NULL, 0, '2024-03-19 16:16:33', '2024-03-19 16:16:33', 3),
(4, '9511', '2024-03-19 16:16:33', NULL, 0, '2024-03-19 16:16:33', '2024-03-19 16:16:33', 3),
(5, '3505', '2024-03-19 16:33:25', NULL, 0, '2024-03-19 16:33:25', '2024-03-19 16:33:25', 4);

-- --------------------------------------------------------

--
-- Table structure for table `packages`
--

CREATE TABLE `packages` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `requirements` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `adsNo` varchar(255) DEFAULT NULL,
  `earn` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `referalBonus` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `validity` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `packages`
--

INSERT INTO `packages` (`id`, `name`, `requirements`, `description`, `adsNo`, `earn`, `image`, `createdAt`, `updatedAt`, `referalBonus`, `price`, `validity`) VALUES
(1, 'Silver', 'Daily Earning <b>$ 1.6 </b>\r\n', 'Daily Earning <b>$ 1.6 </b>\nPackage Life <b> 3 Months </b>\nWithdraw Threshold <b>$ 50 </b>\n\n', '3', '1.6', NULL, '2024-03-19 20:39:13', '2024-03-19 20:39:13', '$ 5', '$ 50', '3 Months'),
(2, 'Golden', 'Daily Earning <b>$ 3.3 </b>\r\n', 'Daily Earning <b>$ 3.3 </b>\r\nPackage Life <b> 3 Months </b>\r\nWithdraw Threshold <b>$ 50 </b>\r\n\r\n', '5', '3.3', NULL, '2024-03-19 20:39:13', '2024-03-19 20:39:13', '$ 10', '$ 100', '3 Months'),
(3, 'Diamond\r\n', 'Daily Earning <b>$ 5 </b>\r\n', 'Daily Earning <b>$ 5 </b>\r\nPackage Life <b> 3 Months </b>\r\nWithdraw Threshold <b>$ 50 </b>\r\n\r\n', '1', '5', NULL, '2024-03-19 20:39:13', '2024-03-19 20:39:13', '$ 15', '$ 150', '3 Months');

-- --------------------------------------------------------

--
-- Table structure for table `paymentmethods`
--

CREATE TABLE `paymentmethods` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `accountNo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `paymentmethods`
--

INSERT INTO `paymentmethods` (`id`, `name`, `createdAt`, `updatedAt`, `accountNo`) VALUES
(1, 'easypaisa', '2024-05-18 15:01:26', '2024-05-18 15:01:26', '03223123123'),
(2, 'jazzcash', '2024-05-18 15:01:26', '2024-05-18 15:01:26', '0323435232');

-- --------------------------------------------------------

--
-- Table structure for table `recharges`
--

CREATE TABLE `recharges` (
  `id` int(11) NOT NULL,
  `amount` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT 0,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `packageId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `userName` varchar(255) DEFAULT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL DEFAULT '',
  `phoneNum` varchar(72) DEFAULT '',
  `password` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `cnic` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `zip` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `kyc` text DEFAULT NULL,
  `status` tinyint(1) DEFAULT 1,
  `referId` varchar(255) DEFAULT NULL,
  `referBy` varchar(255) DEFAULT NULL,
  `wallet` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT '',
  `verifiedAt` datetime DEFAULT NULL,
  `dateOfBirth` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `packageId` int(11) DEFAULT NULL,
  `paymentProof` varchar(255) DEFAULT '',
  `paymentStatus` tinyint(1) DEFAULT 0,
  `paymentMethodId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `userName`, `firstName`, `lastName`, `email`, `phoneNum`, `password`, `gender`, `cnic`, `city`, `zip`, `address`, `kyc`, `status`, `referId`, `referBy`, `wallet`, `image`, `verifiedAt`, `dateOfBirth`, `deletedAt`, `createdAt`, `updatedAt`, `packageId`, `paymentProof`, `paymentStatus`, `paymentMethodId`) VALUES
(1, NULL, 'waqae', 'ahmad', 'snizam_u@hotmail.com', '03214156519', '$2a$12$oxtkszRuc3G9K4ZKbtmIHuEs0BJSMSbwr0Xed9ht/Q6yS1a2NSloW', NULL, NULL, NULL, NULL, NULL, '0', 1, '3', NULL, NULL, '', NULL, NULL, NULL, '2024-03-19 15:37:13', '2024-03-19 15:37:13', NULL, '', 1, NULL),
(2, NULL, 'sigi', 'tech', 'sigi@inboxkitten.com', '21122121', '$2a$12$2/fIGuBcLcrNlOJalM/KGuIomlppSXdczTL6Ox4k30JzAo4FdRZy.', NULL, NULL, NULL, NULL, NULL, '0', 1, '3', NULL, NULL, '', NULL, NULL, NULL, '2024-03-19 15:41:06', '2024-03-19 15:41:06', NULL, '', 1, NULL),
(3, NULL, 'ahmad', 'aas', 'ahmad@inboxkitten.com', '0124231', '$2a$12$62CJYmQxP/pbv1xwP5VEueuxRRPMmiWk30hG9pYj9XzLVNn0lPFO2', NULL, NULL, NULL, NULL, NULL, '0', 1, '1', NULL, NULL, '', '2024-03-19 16:19:41', NULL, NULL, '2024-03-19 16:16:32', '2024-03-20 12:34:34', 2, 'Public\\paymentProof\\paymentProof-153121020-.png', 1, NULL),
(4, NULL, 'ahamd', 'asksa', 'ahmad1@inboxkitten.com', 'asasdasd23', '$2a$12$3zCmWb73.5y/DVgutvP4LeuQ87Wf3t/9aTgZ7Hio1DZO/6ODbtL7G', NULL, NULL, NULL, NULL, NULL, '0', 1, '3', NULL, NULL, '', '2024-03-19 16:34:04', NULL, NULL, '2024-03-19 16:33:24', '2024-03-19 16:34:04', NULL, '', 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `wallets`
--

CREATE TABLE `wallets` (
  `id` int(11) NOT NULL,
  `totalEarnings` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `availableBalance` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `wallets`
--

INSERT INTO `wallets` (`id`, `totalEarnings`, `createdAt`, `updatedAt`, `userId`, `availableBalance`) VALUES
(1, '1.7266666666666666', '2024-05-18 14:31:59', '2024-05-18 14:37:59', 3, '0');

-- --------------------------------------------------------

--
-- Table structure for table `withdraws`
--

CREATE TABLE `withdraws` (
  `id` int(11) NOT NULL,
  `amount` varchar(255) DEFAULT NULL,
  `accountNo` varchar(255) DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `withdraws`
--

INSERT INTO `withdraws` (`id`, `amount`, `accountNo`, `status`, `createdAt`, `updatedAt`, `userId`) VALUES
(1, NULL, NULL, 1, '2024-05-18 14:37:46', '2024-05-18 14:37:46', 3),
(2, NULL, NULL, 1, '2024-05-18 14:37:56', '2024-05-18 14:37:56', 3),
(3, NULL, NULL, 1, '2024-05-18 14:37:59', '2024-05-18 14:37:59', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ads`
--
ALTER TABLE `ads`
  ADD PRIMARY KEY (`id`),
  ADD KEY `packageId` (`packageId`);

--
-- Indexes for table `earnings`
--
ALTER TABLE `earnings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `adId` (`adId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `otpverifications`
--
ALTER TABLE `otpverifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `packages`
--
ALTER TABLE `packages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `paymentmethods`
--
ALTER TABLE `paymentmethods`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recharges`
--
ALTER TABLE `recharges`
  ADD PRIMARY KEY (`id`),
  ADD KEY `packageId` (`packageId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Email` (`email`),
  ADD KEY `packageId` (`packageId`),
  ADD KEY `paymentMethodId` (`paymentMethodId`);

--
-- Indexes for table `wallets`
--
ALTER TABLE `wallets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `withdraws`
--
ALTER TABLE `withdraws`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ads`
--
ALTER TABLE `ads`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `earnings`
--
ALTER TABLE `earnings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `otpverifications`
--
ALTER TABLE `otpverifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `packages`
--
ALTER TABLE `packages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `paymentmethods`
--
ALTER TABLE `paymentmethods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `recharges`
--
ALTER TABLE `recharges`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `wallets`
--
ALTER TABLE `wallets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `withdraws`
--
ALTER TABLE `withdraws`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ads`
--
ALTER TABLE `ads`
  ADD CONSTRAINT `ads_ibfk_1` FOREIGN KEY (`packageId`) REFERENCES `packages` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `earnings`
--
ALTER TABLE `earnings`
  ADD CONSTRAINT `earnings_ibfk_413` FOREIGN KEY (`adId`) REFERENCES `ads` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `earnings_ibfk_414` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `otpverifications`
--
ALTER TABLE `otpverifications`
  ADD CONSTRAINT `otpverifications_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `recharges`
--
ALTER TABLE `recharges`
  ADD CONSTRAINT `recharges_ibfk_397` FOREIGN KEY (`packageId`) REFERENCES `packages` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `recharges_ibfk_398` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_10` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_100` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_102` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_104` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_106` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_108` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_110` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_112` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_114` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_116` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_118` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_12` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_120` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_122` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_124` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_126` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_128` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_130` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_132` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_134` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_136` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_138` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_14` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_140` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_142` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_144` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_146` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_148` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_150` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_152` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_154` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_156` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_158` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_16` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_160` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_162` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_164` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_166` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_168` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_170` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_172` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_174` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_176` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_178` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_18` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_180` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_182` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_184` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_186` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_188` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_190` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_192` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_194` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_196` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_198` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_2` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_20` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_200` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_202` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_204` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_206` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_208` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_210` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_212` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_214` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_216` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_218` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_22` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_220` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_222` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_224` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_226` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_228` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_230` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_232` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_234` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_236` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_238` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_24` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_240` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_242` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_244` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_246` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_248` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_250` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_252` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_254` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_256` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_258` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_26` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_260` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_262` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_264` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_266` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_268` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_270` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_272` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_274` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_276` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_278` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_28` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_280` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_282` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_284` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_286` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_288` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_290` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_292` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_294` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_296` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_298` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_30` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_300` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_302` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_304` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_306` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_308` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_310` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_312` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_314` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_316` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_318` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_32` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_320` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_322` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_324` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_326` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_328` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_330` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_332` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_334` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_336` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_338` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_34` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_340` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_342` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_344` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_346` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_348` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_350` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_352` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_354` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_356` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_358` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_36` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_360` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_362` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_364` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_366` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_368` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_370` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_372` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_374` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_376` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_378` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_38` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_380` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_382` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_384` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_386` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_388` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_390` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_392` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_394` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_396` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_398` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_4` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_40` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_400` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_402` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_404` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_406` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_408` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_410` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_412` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_414` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_416` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_418` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_42` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_420` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_421` FOREIGN KEY (`packageId`) REFERENCES `packages` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_422` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_44` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_46` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_48` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_50` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_52` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_54` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_56` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_58` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_6` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_60` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_62` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_64` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_66` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_68` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_70` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_72` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_74` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_76` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_78` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_8` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_80` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_82` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_84` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_86` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_88` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_90` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_92` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_94` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_96` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_98` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `wallets`
--
ALTER TABLE `wallets`
  ADD CONSTRAINT `wallets_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `withdraws`
--
ALTER TABLE `withdraws`
  ADD CONSTRAINT `withdraws_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
