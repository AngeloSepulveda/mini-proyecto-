// server.js
import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { PORT } from './rutas/config.js';
import { getUsuarios, exportUsuarios, importUsuarios } from './rutas/controladores/usuarioscontroller.js';

const server = http.createServer(async (req, res) => {
    try {
        if (req.url === '/' && req.method === 'GET') {
            const filePath = path.resolve('./vista/home.html');
            const fileContent = await fs.readFile(filePath, 'utf-8');
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(fileContent);
        } else {
            handle(req, res);
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error interno del servidor');
    }
});

const handle = async (req, res) => {
    if (req.url === '/api/usuarios' && req.method === 'GET') {
        await getUsuarios(req, res);
    } else if (req.url === '/api/usuarios/export' && req.method === 'GET') {
        await exportUsuarios(req, res);
    } else if (req.url === '/api/usuarios/import' && req.method === 'POST') {
        await importUsuarios(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Ruta de usuarios no encontrada');
    }
};

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});