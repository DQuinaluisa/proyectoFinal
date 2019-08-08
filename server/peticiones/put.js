var knex = require('../db/knex')

module.exports = {
    editLibro,
    alquilarLibro,
    devolverLibro
};

function editLibro(req, res){
    knex('libros').where('id_libro', req.params.id)
        .update({
            nombre: req.body.nombre,
            editorial: req.body.editorial,
            autor: req.body.autor,
            fecha_publicacion: req.body.fecha_publicacion,
            genero: req.body.genero,
            estado_conservacion: req.body.estado_conservacion,
            estado: req.body.estado
        })
        .then( () => {
            knex.select()
                .from('libros')
                .then( libros => res.send(libros) );
        })
}

function alquilarLibro(req, res){
    knex('libros').where('id_libro', req.params.id)
        .update({
            estado: req.body.estado
        })
        .then( () => {
            knex.select()
                .from('libros')
                .then( libros => res.send(libros) );
        })
}

function devolverLibro(req, res){
    knex('libros').where('id_libro', req.params.id)
        .update({
            estado: req.body.estado
        })
        .then( () => {
            knex.select()
                .from('libros')
                .then( libros => res.send(libros) );
        })
}
