-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-03-2020 a las 18:56:43
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.2.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sistemaweb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `correo`
--

CREATE TABLE `correo` (
  `idCorreo` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `mensaje` varchar(1000) COLLATE utf8_bin DEFAULT NULL,
  `Correoscol` varchar(45) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jefepyme`
--

CREATE TABLE `jefepyme` (
  `idJefePyme` int(11) NOT NULL,
  `nombreJefePyme` varchar(45) COLLATE utf8_bin NOT NULL,
  `correoJefePyme` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `fonoJefeOyme` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `fecha_creacion_jefePyme` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `idProducto` int(11) NOT NULL,
  `nombreProducto` varchar(45) COLLATE utf8_bin NOT NULL,
  `descripcionProducto` varchar(500) COLLATE utf8_bin NOT NULL,
  `valorProducto` int(11) NOT NULL,
  `cantidadProducto` int(11) NOT NULL,
  `Tipos-Servicios-Productos_idTipos-Servicios-Productos` int(11) NOT NULL,
  `fecha_creacion_producto` datetime DEFAULT CURRENT_TIMESTAMP,
  `cantidad_like_producto` int(11) DEFAULT 0,
  `cantidad_dislike_producto` int(11) DEFAULT 0,
  `rutaImagenProducto` varchar(900) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pyme`
--

CREATE TABLE `pyme` (
  `idPyme` int(11) NOT NULL,
  `nombrePyme` varchar(200) COLLATE utf8_bin NOT NULL,
  `correoContactoPyme` varchar(100) COLLATE utf8_bin NOT NULL,
  `fonoContactoUno` int(11) NOT NULL,
  `fonoContactoDos` int(11) DEFAULT 0,
  `descripcionPyme` varchar(500) COLLATE utf8_bin NOT NULL,
  `giroPyme` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `JefePyme_idJefePyme` int(11) NOT NULL,
  `Rubro_idRubro` int(11) NOT NULL,
  `link_OnePage` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  `fecha_creacion_pyme` datetime DEFAULT CURRENT_TIMESTAMP,
  `idRegion` int(11) NOT NULL,
  `rutaImagenPyme` varchar(200) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pyme_has_producto`
--

CREATE TABLE `pyme_has_producto` (
  `Pyme_idPyme` int(11) NOT NULL,
  `Producto_idProducto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `redessociales`
--

CREATE TABLE `redessociales` (
  `idRedSocial` int(11) NOT NULL,
  `linkRed` varchar(200) COLLATE utf8_bin NOT NULL,
  `Pyme_idPyme` int(11) NOT NULL,
  `Tipo-Red-Social_idTipo-Red-Social` int(11) NOT NULL,
  `fecha_creacion_redSocial` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `region`
--

CREATE TABLE `region` (
  `idRegion` int(11) NOT NULL,
  `nombreRegion` varchar(100) COLLATE utf8_bin NOT NULL,
  `numeroRegion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rubro`
--

CREATE TABLE `rubro` (
  `idRubro` int(11) NOT NULL,
  `nombreRubro` varchar(100) COLLATE utf8_bin NOT NULL,
  `descripciónRubro` varchar(500) COLLATE utf8_bin NOT NULL,
  `fecha_creacion_rubro` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicio`
--

CREATE TABLE `servicio` (
  `idServicio` int(11) NOT NULL,
  `nombreServicio` varchar(45) COLLATE utf8_bin NOT NULL,
  `descripcionServicio` varchar(500) COLLATE utf8_bin NOT NULL,
  `valorServicio` int(11) NOT NULL,
  `Tipos-Servicios-Productos_idTipos-Servicios-Productos` int(11) NOT NULL,
  `fecha_creacion_servicio` datetime DEFAULT CURRENT_TIMESTAMP,
  `cantidad_like_servicio` int(11) DEFAULT 0,
  `cantidad_dislike_servicio` int(11) DEFAULT 0,
  `rutaImagenServicio` varchar(900) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicio_has_pyme`
--

CREATE TABLE `servicio_has_pyme` (
  `Servicio_idServicio` int(11) NOT NULL,
  `Pyme_idPyme` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitud_onepage`
--

CREATE TABLE `solicitud_onepage` (
  `idSolicitud_OnePage` int(11) NOT NULL,
  `rutaImagenBanner1` varchar(900) COLLATE utf8_bin DEFAULT NULL,
  `rutaImagenBanner2` varchar(900) COLLATE utf8_bin DEFAULT NULL,
  `rutaImagenBanner3` varchar(900) COLLATE utf8_bin DEFAULT NULL,
  `rutaImagenBanner4` varchar(900) COLLATE utf8_bin DEFAULT NULL,
  `rutaImagenBanner5` varchar(900) COLLATE utf8_bin DEFAULT NULL,
  `rutaImagenDescripcion1` varchar(900) COLLATE utf8_bin DEFAULT NULL,
  `rutaImagenDescripcion2` varchar(900) COLLATE utf8_bin DEFAULT NULL,
  `rutaImagenDescripcion3` varchar(900) COLLATE utf8_bin DEFAULT NULL,
  `descripcion1` varchar(150) COLLATE utf8_bin DEFAULT NULL,
  `descripcion2` varchar(150) COLLATE utf8_bin DEFAULT NULL,
  `descripcion3` varchar(150) COLLATE utf8_bin DEFAULT NULL,
  `descripcionEmpresa` varchar(200) COLLATE utf8_bin DEFAULT NULL,
  `rutaImagenEmpresa_Nosotros` varchar(900) COLLATE utf8_bin DEFAULT NULL,
  `rutaImagenSP1` varchar(900) COLLATE utf8_bin DEFAULT NULL,
  `rutaImagenSP2` varchar(900) COLLATE utf8_bin DEFAULT NULL,
  `rutaImagenSP3` varchar(900) COLLATE utf8_bin DEFAULT NULL,
  `rutaImagenSP4` varchar(900) COLLATE utf8_bin DEFAULT NULL,
  `rutaImagenSP5` varchar(900) COLLATE utf8_bin DEFAULT NULL,
  `rutaImagenSP6` varchar(900) COLLATE utf8_bin DEFAULT NULL,
  `rutaImagenSP7` varchar(900) COLLATE utf8_bin DEFAULT NULL,
  `rutaImagenSP8` varchar(900) COLLATE utf8_bin DEFAULT NULL,
  `rutaImagenSP9` varchar(900) COLLATE utf8_bin DEFAULT NULL,
  `descripcionSP1` varchar(150) COLLATE utf8_bin DEFAULT NULL,
  `descripcionSP2` varchar(150) COLLATE utf8_bin DEFAULT NULL,
  `descripcionSP3` varchar(150) COLLATE utf8_bin DEFAULT NULL,
  `descripcionSP4` varchar(150) COLLATE utf8_bin DEFAULT NULL,
  `descripcionSP5` varchar(150) COLLATE utf8_bin DEFAULT NULL,
  `descripcionSP6` varchar(150) COLLATE utf8_bin DEFAULT NULL,
  `descripcionSP7` varchar(150) COLLATE utf8_bin DEFAULT NULL,
  `descripcionSP8` varchar(150) COLLATE utf8_bin DEFAULT NULL,
  `descripcionSP9` varchar(150) COLLATE utf8_bin DEFAULT NULL,
  `linkFacebook` varchar(200) COLLATE utf8_bin DEFAULT NULL,
  `linkInstagram` varchar(200) COLLATE utf8_bin DEFAULT NULL,
  `linkYouTube` varchar(200) COLLATE utf8_bin DEFAULT NULL,
  `linkTwitter` varchar(200) COLLATE utf8_bin DEFAULT NULL,
  `linkLinkedin` varchar(200) COLLATE utf8_bin DEFAULT NULL,
  `linkDiscord` varchar(200) COLLATE utf8_bin DEFAULT NULL,
  `linkSnapchat` varchar(200) COLLATE utf8_bin DEFAULT NULL,
  `linkDevianArt` varchar(200) COLLATE utf8_bin DEFAULT NULL,
  `fechaSolicitudOnePage` datetime DEFAULT CURRENT_TIMESTAMP,
  `Usuario-Administrador_idUsuario` int(11) NOT NULL,
  `Usuario-Administrador_Pyme_idPyme` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo-red-social`
--

CREATE TABLE `tipo-red-social` (
  `idTipo-Red-Social` int(11) NOT NULL,
  `nombre-RedSocial` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `fecha_creacion_tipoRedSocial` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos-servicios-productos`
--

CREATE TABLE `tipos-servicios-productos` (
  `idTipos-Servicios-Productos` int(11) NOT NULL,
  `nombreTipo` varchar(45) COLLATE utf8_bin NOT NULL,
  `descripcionTipo` varchar(45) COLLATE utf8_bin NOT NULL,
  `fecha_creacion_TipoServicioProducto` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL,
  `NombreUsuario` varchar(200) COLLATE utf8_bin NOT NULL,
  `ClaveUsuario` varchar(45) COLLATE utf8_bin NOT NULL,
  `direccion` varchar(200) COLLATE utf8_bin NOT NULL,
  `celular` int(11) NOT NULL,
  `correo` varchar(45) COLLATE utf8_bin NOT NULL,
  `fecha_creacion_usuario` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario-administrador`
--

CREATE TABLE `usuario-administrador` (
  `idUsuario` int(11) NOT NULL,
  `NombreUsuario` varchar(200) COLLATE utf8_bin NOT NULL,
  `ClaveUsuario` varchar(45) COLLATE utf8_bin NOT NULL,
  `Pyme_idPyme` int(11) NOT NULL,
  `direccion` varchar(200) COLLATE utf8_bin NOT NULL,
  `celular` int(11) NOT NULL,
  `correo` varchar(45) COLLATE utf8_bin NOT NULL,
  `fecha_creacion_usuarioAdmin` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `correo`
--
ALTER TABLE `correo`
  ADD PRIMARY KEY (`idCorreo`);

--
-- Indices de la tabla `jefepyme`
--
ALTER TABLE `jefepyme`
  ADD PRIMARY KEY (`idJefePyme`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`idProducto`),
  ADD KEY `fk_Producto_Tipos-Servicios-Productos1` (`Tipos-Servicios-Productos_idTipos-Servicios-Productos`);

--
-- Indices de la tabla `pyme`
--
ALTER TABLE `pyme`
  ADD PRIMARY KEY (`idPyme`),
  ADD KEY `fk_Pyme_JefePyme1` (`JefePyme_idJefePyme`),
  ADD KEY `fk_Pyme_Rubro1` (`Rubro_idRubro`),
  ADD KEY `fk_Pyme_Region1` (`idRegion`);

--
-- Indices de la tabla `pyme_has_producto`
--
ALTER TABLE `pyme_has_producto`
  ADD PRIMARY KEY (`Pyme_idPyme`,`Producto_idProducto`),
  ADD KEY `fk_Pyme_has_Producto_Producto1` (`Producto_idProducto`);

--
-- Indices de la tabla `redessociales`
--
ALTER TABLE `redessociales`
  ADD PRIMARY KEY (`idRedSocial`),
  ADD KEY `fk_RedesSociales_Pyme1` (`Pyme_idPyme`),
  ADD KEY `fk_RedesSociales_Tipo-Red-Social1` (`Tipo-Red-Social_idTipo-Red-Social`);

--
-- Indices de la tabla `region`
--
ALTER TABLE `region`
  ADD PRIMARY KEY (`idRegion`);

--
-- Indices de la tabla `rubro`
--
ALTER TABLE `rubro`
  ADD PRIMARY KEY (`idRubro`);

--
-- Indices de la tabla `servicio`
--
ALTER TABLE `servicio`
  ADD PRIMARY KEY (`idServicio`),
  ADD KEY `Tipos-Servicios-Productos_idTipos-Servicios-Productos` (`Tipos-Servicios-Productos_idTipos-Servicios-Productos`);

--
-- Indices de la tabla `servicio_has_pyme`
--
ALTER TABLE `servicio_has_pyme`
  ADD PRIMARY KEY (`Servicio_idServicio`,`Pyme_idPyme`),
  ADD KEY `fk_Servicio_has_Pyme_Pyme1` (`Pyme_idPyme`);

--
-- Indices de la tabla `solicitud_onepage`
--
ALTER TABLE `solicitud_onepage`
  ADD PRIMARY KEY (`idSolicitud_OnePage`),
  ADD KEY `fk_Solicitud_OnePage_Usuario-Administrador1` (`Usuario-Administrador_idUsuario`,`Usuario-Administrador_Pyme_idPyme`);

--
-- Indices de la tabla `tipo-red-social`
--
ALTER TABLE `tipo-red-social`
  ADD PRIMARY KEY (`idTipo-Red-Social`);

--
-- Indices de la tabla `tipos-servicios-productos`
--
ALTER TABLE `tipos-servicios-productos`
  ADD PRIMARY KEY (`idTipos-Servicios-Productos`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`);

--
-- Indices de la tabla `usuario-administrador`
--
ALTER TABLE `usuario-administrador`
  ADD PRIMARY KEY (`idUsuario`,`Pyme_idPyme`),
  ADD KEY `fk_Usuario_Pyme1` (`Pyme_idPyme`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `correo`
--
ALTER TABLE `correo`
  MODIFY `idCorreo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `jefepyme`
--
ALTER TABLE `jefepyme`
  MODIFY `idJefePyme` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `idProducto` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pyme`
--
ALTER TABLE `pyme`
  MODIFY `idPyme` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `redessociales`
--
ALTER TABLE `redessociales`
  MODIFY `idRedSocial` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `region`
--
ALTER TABLE `region`
  MODIFY `idRegion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `rubro`
--
ALTER TABLE `rubro`
  MODIFY `idRubro` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `servicio`
--
ALTER TABLE `servicio`
  MODIFY `idServicio` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `solicitud_onepage`
--
ALTER TABLE `solicitud_onepage`
  MODIFY `idSolicitud_OnePage` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipo-red-social`
--
ALTER TABLE `tipo-red-social`
  MODIFY `idTipo-Red-Social` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipos-servicios-productos`
--
ALTER TABLE `tipos-servicios-productos`
  MODIFY `idTipos-Servicios-Productos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario-administrador`
--
ALTER TABLE `usuario-administrador`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `fk_Producto_Tipos-Servicios-Productos1` FOREIGN KEY (`Tipos-Servicios-Productos_idTipos-Servicios-Productos`) REFERENCES `tipos-servicios-productos` (`idTipos-Servicios-Productos`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `pyme`
--
ALTER TABLE `pyme`
  ADD CONSTRAINT `fk_Pyme_JefePyme1` FOREIGN KEY (`JefePyme_idJefePyme`) REFERENCES `jefepyme` (`idJefePyme`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Pyme_Region1` FOREIGN KEY (`idRegion`) REFERENCES `region` (`idRegion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Pyme_Rubro1` FOREIGN KEY (`Rubro_idRubro`) REFERENCES `rubro` (`idRubro`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `pyme_has_producto`
--
ALTER TABLE `pyme_has_producto`
  ADD CONSTRAINT `fk_Pyme_has_Producto_Producto1` FOREIGN KEY (`Producto_idProducto`) REFERENCES `producto` (`idProducto`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Pyme_has_Producto_Pyme1` FOREIGN KEY (`Pyme_idPyme`) REFERENCES `pyme` (`idPyme`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `redessociales`
--
ALTER TABLE `redessociales`
  ADD CONSTRAINT `fk_RedesSociales_Pyme1` FOREIGN KEY (`Pyme_idPyme`) REFERENCES `pyme` (`idPyme`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_RedesSociales_Tipo-Red-Social1` FOREIGN KEY (`Tipo-Red-Social_idTipo-Red-Social`) REFERENCES `tipo-red-social` (`idTipo-Red-Social`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `servicio`
--
ALTER TABLE `servicio`
  ADD CONSTRAINT `servicio_ibfk_1` FOREIGN KEY (`Tipos-Servicios-Productos_idTipos-Servicios-Productos`) REFERENCES `tipos-servicios-productos` (`idTipos-Servicios-Productos`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `servicio_has_pyme`
--
ALTER TABLE `servicio_has_pyme`
  ADD CONSTRAINT `fk_Servicio_has_Pyme_Pyme1` FOREIGN KEY (`Pyme_idPyme`) REFERENCES `pyme` (`idPyme`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Servicio_has_Pyme_Servicio1` FOREIGN KEY (`Servicio_idServicio`) REFERENCES `servicio` (`idServicio`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `solicitud_onepage`
--
ALTER TABLE `solicitud_onepage`
  ADD CONSTRAINT `fk_Solicitud_OnePage_Usuario-Administrador1` FOREIGN KEY (`Usuario-Administrador_idUsuario`,`Usuario-Administrador_Pyme_idPyme`) REFERENCES `usuario-administrador` (`idUsuario`, `Pyme_idPyme`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuario-administrador`
--
ALTER TABLE `usuario-administrador`
  ADD CONSTRAINT `fk_Usuario_Pyme1` FOREIGN KEY (`Pyme_idPyme`) REFERENCES `pyme` (`idPyme`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
