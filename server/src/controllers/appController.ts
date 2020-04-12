import { Request, Response, Router } from 'express';
import pool from '../database';
import jwt from 'jsonwebtoken'
// const router = Router();
const nodemailer = require('nodemailer')

class AppController {

     public async list(req: Request, res: Response) {
          const data = await pool.query('SELECT * FROM `pyme`,`usuario-administrador`');
          res.json(data);
     }

     public async getOne(req: Request, res: Response): Promise<any> {
          const game = await pool.query('SELECT FROM games where id = ?', [req.params.id]);
          if (game.lenth > 0) {
               return res.json(game[0]);
          }
          res.status(404).json({ text: "no existe" });
     }

     public async create(req: Request, res: Response): Promise<void> {
          await pool.query('INSERT INTO games set ?', [req.params.body]);
          console.log(req.body)
          res.json({ text: "create..." });
          // var query='CREATE TABLE prueba3 ( `id` INT(10) NOT NULL ,PRIMARY KEY (id), `nombre` VARCHAR(50) NOT NULL );' 
          
          // await pool.query(query);
          // console.log(req.body)
          // res.json({ text: "create..." });
     }

     public async delete(req: Request, res: Response): Promise<void> {
          await pool.query('DELETE FROM games where id = ?', [req.params.id]);
          res.json({ text: "game delete.." })
     }

     public async update(req: Request, res: Response): Promise<void> {
          await pool.query('UPDATE games set ? where id = ?', [req.body, req.params.id]);
          res.json({ text: "game updated.." })
     }
     public async updateDatosEmpresariales(req: Request, res: Response): Promise<void> {
          const {idPyme}=req.body;
          console.log(idPyme);
          console.log(req.body);
          await pool.query('UPDATE `pyme` set ? WHERE idPyme = ?', [req.body,req.params.id]);
          console.log('UPDATE `pyme` set ? WHERE idPyme = ?', [req.body,req.params.id])
          res.json(req.body)
     }

     public async updateDatosUsuario(req: Request, res: Response): Promise<void> {
          const {idUsuario}=req.body;
          console.log(idUsuario);
          console.log(req.body);
          await pool.query('UPDATE `usuario-administrador` set ? WHERE idUsuario = ?', [req.body,req.params.id]);
          console.log('UPDATE `usuario-administrador` set ? WHERE idUsuario = ?', [req.body,req.params.id])
          res.json(req.body)
     }
     

     public sendEmailUser(req: Request, res: Response) {
          var contentHTML: any;
          const { nombre, correo, mensaje } = req.body;
          contentHTML = `
          Informacion de usuario de Productos Chile
          Nombre: ${nombre}
          Correo: ${correo}
          Mensaje: ${mensaje}
         `
          console.log(contentHTML)

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
               subject: 'Mensaje de usuario Productos Chile', //este mensaje debe ir cambiando, asi no quedan todos juntos 
               text: contentHTML
          };

          transporter.sendMail(mailOptions, (error:any, info:any) => {
               if (error) {
                    return console.log(error.message);
               }
               console.log('success');
          });
     }

     public async signin(req:any,res:any):Promise<void>{ 
          const {email,password}=req.body;
          console.log(email)
          console.log(password)
          // var Admin={
          //      idUsuario:0,
          //      NombreUsuario:'',
          //      Pyme_idPyme:'',
          //      direccion:'',
          //      celular:password,
          //      correo:''
          // }
          var Admin={
               idUsuario:0,
               NombreUsuario:''
               
          }
          
               console.log("consulta a la db por correo y password")
               const admin=await pool.query('SELECT idUsuario,NombreUsuario FROM `usuario-administrador` WHERE correo=\''+email+'\' AND ClaveUsuario=\''+password+'\'')
               if(admin.length > 0){ 
                    Admin=admin[0]
                    console.log('admin Admin= '+Admin)
                    console.log('admin Admin= '+Admin.NombreUsuario)
                    //console.log('idadmin Admin= '+Admin.idUsuario)
                    const token=jwt.sign({_id: Admin.idUsuario},'secretkey')
                    return res.status(200).json({Admin,token})
               }else{
                    //res.json({message:'password incorrecta'});
                    return res.status(401).send("correo o contraseña incorrecta") 
               }
          
          

     }
 
     //obtener usuario-administrador en panel, retorna los datos del usuario y el nombre de la pyme asociada, requiere el id del usuario
     public async getUsuario(req:Request,res: Response): Promise<any> {

          console.log('getusuario metodo en node')
          
          const usuario = await pool.query('SELECT u.NombreUsuario,u.ApellidoUsuario,u.celular,u.correo,u.direccion,p.nombrePyme FROM `usuario-administrador` AS u INNER JOIN `pyme` AS p ON u.Pyme_idPyme = p.idPyme where u.idUsuario = ?', [req.params.id]);
          console.log('usuario= '+usuario)
          
          if (usuario.length > 0) {
               return res.json(usuario[0]);
          }
          return res.json({ text: "usuario no existe en db" })
     } 

      
     public async getPyme(req:Request,res: Response): Promise<any> {
          console.log('getpyme metodo en node')
          
          const pyme = await pool.query('SELECT p.nombrePyme,p.giroPyme,p.fonoContactoUno,p.fonoContactoDos,p.correoContactoPyme,ru.nombreRubro,re.nombreRegion FROM `pyme` AS p INNER JOIN `usuario-administrador` AS u ON u.Pyme_idPyme = p.idPyme INNER JOIN `rubro` AS ru ON p.Rubro_idRubro = ru.idRubro INNER JOIN `region` AS re ON p.idRegion = re.idRegion where u.idUsuario = ?', [req.params.id]);
          if (pyme.length > 0) {
                return res.json(pyme[0]);
          }
          return res.json({ text: "pyme no existe en db" })
     }

}

const appController = new AppController();
export default appController;