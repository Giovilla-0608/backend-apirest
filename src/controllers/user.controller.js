import { createAccessToken } from "../libs/jwt.js"
import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from "../config.js"

export const registro = async(req, res)=>{
    const {username, email, password} = req.body;

    try {
        const userFound = await User.findOne({email})
        if(userFound)
            return res.status(400).json(["el email ya esta en uso"])

        const passwordHass = await bcrypt.hash(password, 10)
        const newUser = new User({
            userName, email, password: passwordHass
        })
        //esta logica es para guardar este documento en la base de datos
        const saveUser = await newUser.save();
        //utilizamos el token
        const token = await createAccessToken({id:saveUser._id})
        //crear una cookie en el navegador o el cliente con express
        res.cookie("token", token)
        //respuesta al cliente
        res.json({
            email: saveUser.email,
            username: saveUser.userName,
            id: saveUser.id
        })
    } catch (error) {
        res.status(500).json([error.message])
    }
}

export const login = async(req, res)=>{
    
}