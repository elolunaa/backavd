//Todo: crear app express

// Importar express, crear app con express, usar app.listen para abrir puertas

import express from 'express'

const api = express()

api.listen(8000, ()=>{
    console.log('API corriendo en el puerto 8000')
})