import Client from '../models/client.model.js'

//peticion que nos ayude a traer una lista de clientes
export const getClient = async (req, res) => {
    const clients = await Client.find({
        user: req.user.id,
    }).populate('user');
    res.json(clients);
}
//para mostrar o ver un solo cliente
export const getClientOne = async (req, res) => {
    const client = await Client.findById(req.params.id);
    if(!client) return res.status(404).json({message:"client not found"})
    
    res.json(client)    
}
//crear para el cliente y se guarde dentro de la base de datos
export const createClient = async (req, res) => {
    const {nombre, descripcion, direccion, web, industria, estado, telefono} =
    req.body;

    const newClient = new Client({
        nombre,
        descripcion,
        direccion,
        web,
        industria,
        estado,
        telefono,
        user: req.user.id,
    });
    const saveClient = await newClient.save()
    res.json(saveClient)
};
//poder eliminar el cliente
export const deleteClient = async (req, res) => {
    const client = await Client.findByIdAndDelete(req.params.id)
    if(!client) return res.status(400).json({message: "client not found"})

    return res.sendStatus(204);
}
//poder actualizar el cliente
export const updateClient = async (req, res) => {
    const client = await Client.findByIdAndUpdate(req.params.id, req.body, {new:true})
    if(!client) return res.status(404).json({message:"client not found"})
    
    res.json(client)
}