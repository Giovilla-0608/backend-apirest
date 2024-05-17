import { TOKEN_SECRET } from "../config";
import jwt from 'jsonwebtoken'

export function createAccessToken(payload){
    //Objeto global de node
    //promesa para utilizar el async await o peticion asincronas
    return new Promise((resolve, reject)=> {
        jwt.sign(
            payload,
            TOKEN_SECRET,
            {
                expiresIn:"id",
            },
            (err, token) => {
                if(err) reject(err)
                resolve(token)
            }
        )
    })
}