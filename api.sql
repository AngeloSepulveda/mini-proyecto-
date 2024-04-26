-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-04-2024 a las 01:29:52
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `api`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) DEFAULT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(50) DEFAULT NULL,
  `dirección` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `dni` varchar(50) DEFAULT NULL,
  `edad` date DEFAULT NULL,
  `fecha_creacion` varchar(50) DEFAULT NULL,
  `telefono` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `dirección`, `email`, `dni`, `edad`, `fecha_creacion`, `telefono`) VALUES
(1, 'Gray', 'Ickovici', '68 Ludington Parkway', 'gickovici0@slideshare.net', '17-075-5900', '2023-05-17', '2015', '(806) 8266952'),
(2, 'Dawn', 'Mawne', '4 Northwestern Point', 'dmawne1@rambler.ru', '64-440-3776', '2023-10-13', '2009', '(939) 5053467'),
(3, 'Marleen', 'Degue', '7568 Menomonie Alley', 'mdegue2@thetimes.co.uk', '03-684-2716', '2024-04-07', '0', '(311) 2312620'),
(4, 'Feodor', 'Debell', '6 Valley Edge Center', 'fdebell3@joomla.org', '78-399-2686', '2023-07-18', '2004', '(793) 9275884'),
(5, 'Julieta', 'Sanger', '0 Elmside Junction', 'jsanger4@ustream.tv', '87-579-0141', '2023-07-13', '2004', '(387) 3679436'),
(6, 'Nickie', 'Dwire', '48298 Pearson Plaza', 'ndwire5@ovh.net', '73-147-8978', '2023-07-23', '2017', '(259) 7749788'),
(7, 'Dieter', 'Ogger', '434 Westridge Hill', 'dogger6@printfriendly.com', '68-862-7174', '2023-08-19', '2011', '(479) 2865052'),
(8, 'Ardenia', 'Morforth', '42 Dawn Center', 'amorforth7@accuweather.com', '27-304-0123', '2023-12-19', '2004', '(405) 7756047'),
(9, 'Chalmers', 'Folli', '10768 Killdeer Street', 'cfolli8@ox.ac.uk', '98-391-5629', '2023-09-04', '2018', '(822) 5854304'),
(10, 'Suki', 'MacDowal', '980 Elgar Center', 'smacdowal9@hostgator.com', '85-615-1345', '2023-05-14', '2013', '(259) 8969098'),
(11, 'Stafani', 'Cortez', '0 Karstens Hill', 'scorteza@tiny.cc', '87-487-9757', '2023-11-27', '2016', '(471) 4349023'),
(12, 'Ritchie', 'Rubinovitsch', '72 Judy Junction', 'rrubinovitschb@japanpost.jp', '58-080-3346', '2024-02-05', '2010', '(850) 2274054'),
(13, 'Letisha', 'Sewards', '4238 Bultman Road', 'lsewardsc@bbb.org', '48-516-1438', '2023-08-20', '2010', '(245) 6023517'),
(14, 'Gearalt', 'Reboulet', '47 Comanche Alley', 'grebouletd@ftc.gov', '17-147-4870', '2024-03-31', '2013', '(592) 7936531'),
(15, 'Udale', 'Chatteris', '1003 Michigan Parkway', 'uchatterise@cmu.edu', '66-080-3605', '2024-03-20', '2015', '(482) 7693928'),
(16, 'Elinor', 'Joffe', '19 Sunbrook Plaza', 'ejoffef@networksolutions.com', '59-381-5753', '2023-05-04', '1999', '(650) 3402431'),
(17, 'Antone', 'Birkmyre', '567 Thierer Street', 'abirkmyreg@forbes.com', '19-388-3406', '2024-02-25', '2011', '(511) 7480390'),
(18, 'Liva', 'Greber', '38 Summit Hill', 'lgreberh@linkedin.com', '89-926-4801', '2023-11-22', '2019', '(633) 8482689'),
(19, 'Lambert', 'Hiscocks', '1824 Orin Street', 'lhiscocksi@latimes.com', '11-018-9762', '2023-07-17', '2006', '(810) 7750587'),
(20, 'Angelina', 'Osbiston', '17 Springs Drive', 'aosbistonj@amazon.com', '23-768-7280', '2023-05-05', '2008', '(172) 9824959');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
