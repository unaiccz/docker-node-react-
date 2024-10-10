// Importamos el modelo NotasModel desde el archivo Notasmodel.js
import NotasModel from "../models/Notasmodel.js";

// Definimos una función asíncrona para obtener todos los registros de la tabla 'notas'
export const getAll = async (req,res)=> {
    try{
       // Utilizamos el método 'findAll' de Sequelize para obtener todos los registros
       const Notass = await NotasModel.findAll()
       // Enviamos los registros como respuesta en formato JSON
       res.json(Notass)
    } catch (error){
       // Si hay un error, enviamos el mensaje de error como respuesta en formato JSON
       res.json({message: error.message})}
}

// Definimos una función asíncrona para obtener un registro específico de la tabla 'notas'
export const getNotas = async (req,res)=> {
    try{
       // Utilizamos el método 'findOne' de Sequelize para obtener el registro con el id especificado en los parámetros de la solicitud
       const Notas = await NotasModel.findOne({where:{id:req.params.id}})
       // Enviamos el registro como respuesta en formato JSON
       res.json(Notas)
    } catch (error){
       // Si hay un error, enviamos el mensaje de error como respuesta en formato JSON
       res.json({message: error.message})}
}

// Definimos una función asíncrona para crear un nuevo registro en la tabla 'notas'
export const CreateNotas = async (req,res)=> {
    try{
        // Utilizamos el método 'create' de Sequelize para crear un nuevo registro con los datos especificados en el cuerpo de la solicitud
        await NotasModel.create(req.body)
        // Enviamos un mensaje de éxito como respuesta en formato JSON
        res.json({message: "Notas creado"})
    }
    catch (error){
        // Si hay un error, enviamos el mensaje de error como respuesta en formato JSON
        res.json({message: error.message})
    }
}

// Definimos una función asíncrona para actualizar un registro específico de la tabla 'notas'
export const UpdateNotas = async (req, res) =>{
    try{
        // Utilizamos el método 'update' de Sequelize para actualizar el registro con el id especificado en los parámetros de la solicitud con los datos especificados en el cuerpo de la solicitud
        await NotasModel.update(req.body,{where:{id:req.params.id}})
        // Enviamos un mensaje de éxito como respuesta en formato JSON
        res.json({message: "Notas actualizado"})
    }
    catch (error){
        // Si hay un error, enviamos el mensaje de error como respuesta en formato JSON
        res.json({message: error.message})
    }
}

// Definimos una función asíncrona para eliminar un registro específico de la tabla 'notas'
export const DeleteNotas = async (req,res)=> {
    try{
        // Utilizamos el método 'destroy' de Sequelize para eliminar el registro con el id especificado en los parámetros de la solicitud
        await NotasModel.destroy({where:{id:req.params.id}})
        // Enviamos un mensaje de éxito como respuesta en formato JSON
        res.json({message: "Notas eliminado"})
    }
    catch (error){
        // Si hay un error, enviamos el mensaje de error como respuesta en formato JSON
        res.json({message: error.message})
    }
}