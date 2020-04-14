import { Router } from "express";
import appController from "../controllers/appController";
import jwt from 'jsonwebtoken';

class AppRoutes {

     public router: Router = Router();

     constructor() {
          this.config();
     }

     config(): void {
          this.router.get('/list-all', appController.list);
          this.router.get('/get-one/:id', appController.getOne);
          this.router.post('/a', appController.create);
          this.router.delete('/:id', appController.delete);
          this.router.put('/:id', appController.update);
          this.router.post('/send-email-user',appController.sendEmailUser);
          this.router.post('/signin', appController.signin);
          this.router.get('/get-usuario/:id', appController.getUsuario);
          this.router.get('/get-pyme/:id', appController.getPyme);
          this.router.put('/update-datos-empresariales/:id', appController.updateDatosEmpresariales);
          this.router.put('/update-datos-usuario/:id', appController.updateDatosUsuario);
          this.router.post('/solicitar-OnePage/:id', appController.solicitarOnePage);
     }
}

const appRoutes= new AppRoutes();
export default appRoutes.router;

function verifyToken(req:any,res:any,next:any) {
     console.log(req.headers.authorization)
     //en el header viene el authorization, que es el token, si es undefined es porque no viene nada, o sea, no esta logueado, si viene algo, se tiene que comprobar que es un token valido
     if(!req.headers.authorization){
          //si no viene algo en el authorization
        return res.status(401).send('unauthorized request')
     }
     const token=req.headers.authorization.split(' ')[1]
     //dividimos el req en 2 , por que despues del espacio esta el token como tal
     console.log(token)
     if(token==null){// si el token que viene es nulo, retornamos el mensaje de solicitud no autorizada
          return res.status(401).send('unauthorized request')  
     }
     console.log('error')
     const payload:any=jwt.verify(token,'secretkey')
     //ejemplo de token=  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjE2LCJpYXQiOjE1NzcyOTE4MTB9.mE-duTHebllE1LhYFjDqPVoI21JzBzjAqhqnKfqlO2o
     console.log(payload);//aqui tenemos 2 datos , el id y iat, el id es lo unico importante 
     req.userId=payload._id;
     next()
}