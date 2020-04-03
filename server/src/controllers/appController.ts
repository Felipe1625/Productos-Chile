import { Request, Response } from 'express';
import pool from '../database';

class AppController {

     public async list(req: Request, res: Response) {
          const games=await pool.query('SELECT * FROM games');
          res.json(games);
     }

     public async getOne(req: Request, res: Response): Promise<any> {
          const game=await pool.query('SELECT FROM games where id = ?', [req.params.id]);
          if(game.lenth > 0){
               return res.json(game[0]);
          }
          res.status(404).json({text: "no existe"});
     }

     public async create (req:Request, res:Response):Promise<void>{   
          await pool.query('INSERT INTO games set ?', [req.params.body]);
          console.log(req.body)
          res.json({text:"create..."});
     }

     public async delete (req:Request, res:Response): Promise<void>{   
          await pool.query('DELETE FROM games where id = ?',[req.params.id]);
          res.json({text:"game delete.."})
     }

     public async update (req:Request, res:Response): Promise<void>{   
          await pool.query('UPDATE games set ? where id = ?',[req.body,req.params.id]);
          res.json({text:"game updated.."})
     }
    
}

const appController = new AppController();
export default appController;