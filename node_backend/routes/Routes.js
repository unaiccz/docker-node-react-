// Importamos el módulo express para poder crear un router
import express from 'express';

// Importamos las funciones que manejarán las solicitudes a la API de 'notas'
import { CreateNotas, DeleteNotas, UpdateNotas, getAll, getNotas } from '../controllers/Notascontroller.js';

// Creamos un nuevo router
const router = express.Router();

// Definimos las rutas para la API de 'notas'
router.get('/', getAll) // Cuando se hace una solicitud GET a la ruta base ('/'), se llama a la función 'getAll'
router.get('/:id', getNotas) // Cuando se hace una solicitud GET a una ruta con un id específico (como '/123'), se llama a la función 'getNotas'
router.post('/', CreateNotas) // Cuando se hace una solicitud POST a la ruta base ('/'), se llama a la función 'CreateNotas'
router.put('/:id', UpdateNotas) // Cuando se hace una solicitud PUT a una ruta con un id específico (como '/123'), se llama a la función 'UpdateNotas'
router.delete('/:id', DeleteNotas) // Cuando se hace una solicitud DELETE a una ruta con un id específico (como '/123'), se llama a la función 'DeleteNotas'

// Exportamos el router para que pueda ser utilizado en otras partes de la aplicación
export default router;

// Aquí se pueden definir otros puntos finales de la API