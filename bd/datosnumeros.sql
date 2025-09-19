-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 19-09-2025 a las 05:17:02
-- Versión del servidor: 8.0.40
-- Versión de PHP: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `datosnumeros`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dwnumeros`
--

CREATE TABLE `dwnumeros` (
  `id` int NOT NULL,
  `numero` int NOT NULL,
  `letra` varchar(80) NOT NULL,
  `inverso` varchar(80) NOT NULL,
  `ninverso` varchar(80) NOT NULL,
  `ti` varchar(80) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `dwnumeros`
--

INSERT INTO `dwnumeros` (`id`, `numero`, `letra`, `inverso`, `ninverso`, `ti`, `created_at`, `updated_at`) VALUES
(6, 34, 'TREINTA Y CUATRO', 'ORTAUC Y ATNIERT', '43', 'THIRTYFOUR', '2025-09-18 00:00:00', '2025-09-18 22:33:42'),
(7, 85, 'OCHENTA Y CINCO', 'OCNIC Y ATNEHCO', '58', 'EIGHTYFIVE', '2025-09-18 00:00:00', '2025-09-18 22:35:47'),
(8, 34, 'TREINTA Y CUATRO', 'ORTAUC Y ATNIERT', '43', 'THIRTYFOUR', '2025-09-18 00:00:00', '2025-09-18 22:41:13'),
(9, 85, 'OCHENTA Y CINCO', 'OCNIC Y ATNEHCO', '58', 'EIGHTYFIVE', '2025-09-18 00:00:00', '2025-09-18 22:46:26');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `dwnumeros`
--
ALTER TABLE `dwnumeros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `dwnumeros`
--
ALTER TABLE `dwnumeros`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
