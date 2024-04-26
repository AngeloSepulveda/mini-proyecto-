import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USER, PORT } from './config.js'

import { createPool } from 'mysql2/promise'

console.log(DB_HOST)
console.log(DB_USER)
console.log(DB_PASSWORD)

console.log(DB_DATABASE)
console.log(PORT)

// Configuración de la conexión a la base de datos
export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: PORT,
  
});
