const express = require('express')
const person_model = require('../models/person.model')
const person_routes = express.Router()

/*Solicitudes HTTP en total trabajaremos con 5:
    GET:listar, no recibe parametro
    ------
    GET{id}:ver información en detalle,recibe como parametro el id
    POST: crear nuevo registro,no recibe parametro
    PUT{id}: actualizar un registro existente,recibe como parametro el id
    DELETE{id}:eliminar un registro existente,recibe como parametro el id
*/
//:(parametro)

person_routes.post('/',(req,res)=>{})
person_routes.get('/',(req,res)=>{})//listar
person_routes.get('/:personId',(req,res)=>{})//mirar 
person_routes.put('/:personId',(req,res)=>{}) //actualizar
person_routes.delete('/:personId',(req,res)=>{}) //eliminar
//courseId, variables se relacionan con la entidad
//HTTP ACCEDE A vistas y api
//api:data
module.exports = person_routes
