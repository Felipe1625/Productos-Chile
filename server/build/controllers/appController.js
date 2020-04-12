"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// const router = Router();
const nodemailer = require('nodemailer');
class AppController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield database_1.default.query('SELECT * FROM `pyme`,`usuario-administrador`');
            res.json(data);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const game = yield database_1.default.query('SELECT FROM games where id = ?', [req.params.id]);
            if (game.lenth > 0) {
                return res.json(game[0]);
            }
            res.status(404).json({ text: "no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO games set ?', [req.params.body]);
            console.log(req.body);
            res.json({ text: "create..." });
            // var query='CREATE TABLE prueba3 ( `id` INT(10) NOT NULL ,PRIMARY KEY (id), `nombre` VARCHAR(50) NOT NULL );' 
            // await pool.query(query);
            // console.log(req.body)
            // res.json({ text: "create..." });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('DELETE FROM games where id = ?', [req.params.id]);
            res.json({ text: "game delete.." });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('UPDATE games set ? where id = ?', [req.body, req.params.id]);
            res.json({ text: "game updated.." });
        });
    }
    updateDatosEmpresariales(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idPyme } = req.body;
            console.log(idPyme);
            console.log(req.body);
            yield database_1.default.query('UPDATE `pyme` set ? WHERE idPyme = ?', [req.body, req.params.id]);
            console.log('UPDATE `pyme` set ? WHERE idPyme = ?', [req.body, req.params.id]);
            res.json(req.body);
        });
    }
    updateDatosUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idUsuario } = req.body;
            console.log(idUsuario);
            console.log(req.body);
            yield database_1.default.query('UPDATE `usuario-administrador` set ? WHERE idUsuario = ?', [req.body, req.params.id]);
            console.log('UPDATE `usuario-administrador` set ? WHERE idUsuario = ?', [req.body, req.params.id]);
            res.json(req.body);
        });
    }
    sendEmailUser(req, res) {
        var contentHTML;
        const { nombre, correo, mensaje } = req.body;
        contentHTML = `
          Informacion de usuario de Productos Chile
          Nombre: ${nombre}
          Correo: ${correo}
          Mensaje: ${mensaje}
         `;
        console.log(contentHTML);
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: 'felipe.ascencio.sandoval@gmail.com',
                pass: '18416518-k'
            }
        });
        let mailOptions = {
            from: 'felipe.ascencio.sandoval@gmail.com',
            to: 'felipe.ascencio@virginiogomez.cl',
            subject: 'Mensaje de usuario Productos Chile',
            text: contentHTML
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error.message);
            }
            console.log('success');
        });
    }
    signin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            console.log(email);
            console.log(password);
            // var Admin={
            //      idUsuario:0,
            //      NombreUsuario:'',
            //      Pyme_idPyme:'',
            //      direccion:'',
            //      celular:password,
            //      correo:''
            // }
            var Admin = {
                idUsuario: 0,
                NombreUsuario: ''
            };
            console.log("consulta a la db por correo y password");
            const admin = yield database_1.default.query('SELECT idUsuario,NombreUsuario FROM `usuario-administrador` WHERE correo=\'' + email + '\' AND ClaveUsuario=\'' + password + '\'');
            if (admin.length > 0) {
                Admin = admin[0];
                console.log('admin Admin= ' + Admin);
                console.log('admin Admin= ' + Admin.NombreUsuario);
                //console.log('idadmin Admin= '+Admin.idUsuario)
                const token = jsonwebtoken_1.default.sign({ _id: Admin.idUsuario }, 'secretkey');
                return res.status(200).json({ Admin, token });
            }
            else {
                //res.json({message:'password incorrecta'});
                return res.status(401).send("correo o contraseña incorrecta");
            }
        });
    }
    //obtener usuario-administrador en panel, retorna los datos del usuario y el nombre de la pyme asociada, requiere el id del usuario
    getUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('getusuario metodo en node');
            const usuario = yield database_1.default.query('SELECT u.NombreUsuario,u.ApellidoUsuario,u.celular,u.correo,u.direccion,p.nombrePyme FROM `usuario-administrador` AS u INNER JOIN `pyme` AS p ON u.Pyme_idPyme = p.idPyme where u.idUsuario = ?', [req.params.id]);
            console.log('usuario= ' + usuario);
            if (usuario.length > 0) {
                return res.json(usuario[0]);
            }
            return res.json({ text: "usuario no existe en db" });
        });
    }
    getPyme(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('getpyme metodo en node');
            const pyme = yield database_1.default.query('SELECT p.nombrePyme,p.giroPyme,p.fonoContactoUno,p.fonoContactoDos,p.correoContactoPyme,ru.nombreRubro,re.nombreRegion FROM `pyme` AS p INNER JOIN `usuario-administrador` AS u ON u.Pyme_idPyme = p.idPyme INNER JOIN `rubro` AS ru ON p.Rubro_idRubro = ru.idRubro INNER JOIN `region` AS re ON p.idRegion = re.idRegion where u.idUsuario = ?', [req.params.id]);
            if (pyme.length > 0) {
                return res.json(pyme[0]);
            }
            return res.json({ text: "pyme no existe en db" });
        });
    }
}
const appController = new AppController();
exports.default = appController;
