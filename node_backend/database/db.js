// Importamos Sequelize, que es una biblioteca para trabajar con bases de datos SQL en Node.js
import { Sequelize } from "sequelize";

// Creamos una nueva instancia de Sequelize, que representa una conexión a una base de datos
// Los argumentos son: el nombre de la base de datos ('notas'), el nombre de usuario ('root'), la contraseña ('011110') y un objeto de opciones
const db = new Sequelize('notas','root','011110',{
    // En las opciones, especificamos que el host de la base de datos es 'localhost'
    host: 'localhost:',
    // Y que el dialecto (es decir, el tipo de base de datos SQL) es 'mysql'
    dialect: 'mysql',
})

// Exportamos la instancia de Sequelize para que pueda ser utilizada en otras partes de la aplicación
export default db;