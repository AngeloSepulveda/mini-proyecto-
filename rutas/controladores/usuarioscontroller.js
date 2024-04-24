import { connection } from '../db.js';

import fs from 'node:fs/promises';

export async function getUsuarios(req, res) {
    const [rows] = await connection.query('SELECT * FROM usuarios');
    return rows;
}

export async function exportUsuarios(req, res) {
     try {
        const usuarios = await listaUsuarios();
        const csvData = usuarios.map(usuario =>
            `${usuario.id},${usuario.nombres},${usuario.apellidos},${usuario.direccion},${usuario.correo_electronico},${usuario.dni},${usuario.edad},${usuario.fecha_creacion},${usuario.telefono}`
        ).join('\n');
        await fs.writeFile('usuarios.csv', csvData);
        console.log('Usuarios exportados a usuarios.csv');
    } catch (err) {
        console.error('Error al exportar usuarios a CSV:', err);
        throw err;
    }
}

export async function importUsuarios(req, res) {
    try {
        const archPath = path.resolve('./usuarios.csv');
        const archCont = await fs.readFile(archPath, 'utf-8');
        const sepLineas = archCont.split('\n').map(row => row.split(','));

        for (const userData of sepLineas) {
            const [id, nombres, apellidos, direccion, correoElectronico, dni, edad, fechaCreacion, telefono] = userData;
            const [existeId] = await pool.query('SELECT id FROM empleados WHERE id = ?', [id]);
            if (existeId.length > 0) {
                console.log(`El ID ${id} ya existe en la base de datos. Se omite`);
                continue;
            }

            await pool.query('INSERT INTO empleados (id, nombres, apellidos, direccion, correo_electronico, dni, edad, fecha_creacion, telefono) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', 
            [id, nombres, apellidos, direccion, correoElectronico, dni, edad, fechaCreacion, telefono]);
            console.log(`Usuario con ID ${id} ingresado correctamente.`);
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Usuario Importado</h1>');
    } catch (err) {
        console.error('Error al importar usuarios desde CSV:', err);
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('<h1>Error al importar usuarios desde CSV</h1>');
    }
}

