// Importamos la configuración de la base de datos y Sequelize
import db from "../database/db.js";
import { DataTypes } from "sequelize";

// Definimos el modelo 'notas' utilizando la función 'define' de Sequelize
const BlogModel = db.define('notas',{
    // El modelo tiene tres campos: Title, contenido y fecha
    Title:{
        // Title es un STRING y no puede ser nulo
        type: DataTypes.STRING,
        allowNull: false
    },
    contenido:{
        // contenido es un STRING y no puede ser nulo
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha:{
        // fecha es un DATE y no puede ser nulo. Por defecto, se establece en la fecha y hora actuales
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    // Desactivamos los campos de timestamp automáticos de Sequelize (createdAt y updatedAt)
    timestamps: false,  
});

// Exportamos el modelo para que pueda ser utilizado en otras partes de la aplicación
export default BlogModel;