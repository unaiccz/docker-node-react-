// Importamos los módulos necesarios
import express from 'express'; // Express es un framework para construir aplicaciones web en Node.js
import cors from 'cors'; // CORS es un paquete de Node.js para proporcionar un middleware de CORS
import db from './database/db.js'; // Importamos la configuración de la base de datos
import router from './routes/Routes.js'; // Importamos las rutas de la aplicación

// Creamos una nueva aplicación Express
const app = express();

// Usamos el middleware de CORS. Esta línea está comentada, por lo que CORS no se está utilizando actualmente
// app.use(cors());

// Usamos el middleware de express.json() para parsear el cuerpo de las solicitudes entrantes en un objeto JSON
app.use(express.json());

// Usamos el middleware de router en la ruta '/blogs'. Todas las rutas definidas en 'router' se montarán en esta ruta
app.use('/notas',router);

// Intentamos autenticarnos con la base de datos
try{
    await db.authenticate();
    console.log('Conectado a la base de datos') // Si la autenticación es exitosa, se registra un mensaje en la consola
}
catch(error){
    console.log(`No se pudo conectar a la base de datos: ${error}`) // Si hay un error, se registra el mensaje de error en la consola
}

// Definimos una ruta GET para la ruta '/'. Cuando se accede a esta ruta, se envía el mensaje 'Hola Mundo'
app.get('/',(req,res)=>{
    res.send('Hola Mundo')
})

// Hacemos que la aplicación escuche en el puerto 8181. Cuando la aplicación comienza a escuchar, se registra un mensaje en la consola
app.listen(8181,()=>{
    console.log('Servidor corriendo en http://localhost:8181')
})