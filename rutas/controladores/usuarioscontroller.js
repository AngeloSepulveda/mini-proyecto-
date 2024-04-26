import { pool } from '../db.js';
import path from 'node:path';
import fs from 'node:fs/promises';

export async function getUsuarios(req, res) {
    try {
        const [usuarios] = await pool.query('SELECT * FROM usuarios');
        res.json(usuarios);
         // Enviar la lista de usuarios como respuesta en formato JSON
         fs.writeFile('usuario.JSON', jsonData, (error) => {
            if (error) {
              console.error('Error al guardar el archivo csv:', error);
            } else {
              console.log('Archivo txt creado exitosamente: usuarios.csv');
            }
          });
    } catch (err) {
        console.error('Error al obtener usuarios:', err);
        if (err.code === 'ETIMEDOUT') {
            //res.status(504).send('La conexión a la base de datos ha excedido el tiempo de espera.');
        } else {
            res.status(500).send('Error al obtener usuarios de la base de datos.');
        }
    }
}
       
      

export async function exportUsuarios(req, res) {
    try {
        const [usuarios] = await pool.query('SELECT * FROM usuarios');
        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "ID,Nombre,Apellido,Email\n"; // Asumiendo que estos son los campos
        usuarios.forEach(user => {
            csvContent += `${user.id},${user.nombre},${user.apellido},${user.email}\n`;
        });
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename="usuarios.csv"');
        res.send(csvContent);
    } catch (err) {
        console.error('Error al exportar usuarios a CSV:', err);
        res.status(500).send('Error al exportar usuarios.');
    }
}
export async function importUsuarios(req, res) {
    try {
        // Supongamos que `usuariosParaImportar` es un array de usuarios obtenidos de algún lugar.
        for (const { id, nombres, apellidos, direccion, correoElectronico, dni, edad, fechaCreacion, telefono } of usuariosParaImportar) {
            const [existeId] = await pool.query('SELECT id FROM usuarios WHERE id = ?', [id]);
            if (existeId.length > 0) {
                console.log(`El ID ${id} ya existe. Se omite.`);
                continue;
            }
            await pool.query('INSERT INTO usuarios (id, nombres, apellidos, direccion, correo_electronico, dni, edad, fecha_creacion, telefono) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [id, nombres, apellidos, direccion, correoElectronico, dni, edad, fechaCreacion, telefono]);
            console.log(`Usuario con ID ${id} ingresado.`);
        }
        res.status(200).send('Usuarios importados exitosamente.');
    } catch (err) {
        console.error('Error al importar usuarios:', err);
        res.status(500).send('Error al importar usuarios.');
    }
}