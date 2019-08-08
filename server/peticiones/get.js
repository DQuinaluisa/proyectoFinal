var knex = require('../db/knex')

module.exports = {
    getLibros,
    getLibro,
    getEstadoConservacion,
    getLibroAlquilado
};

function getLibros(req, res){
    knex.select('id_libro', 'codigo_isbn', 'nombre', 'editorial', 'autor', 'fecha_publicacion',
                'genero', 'estados_conservacion.nombre_estado_conservacion', 'estados.nombre_estado')
        .from('libros')
        .join('estados_conservacion', 'libros.estado_conservacion', '=',
            'estados_conservacion.id_estado_conservacion')
        .join('estados', 'libros.estado', '=', 'estados.id_estado')
        .where('eliminado', 1)
        .where('estado', 1)
        .then( libros => res.send(libros) ); 
}

function getEstadoConservacion(req, res){
    knex.select()
        .from('estados_conservacion')
        .then( estados_conservacion => res.send(estados_conservacion) );
}

function getLibroAlquilado(req, res){
    knex.select('id_libro', 'codigo_isbn', 'nombre', 'editorial', 'autor', 'fecha_publicacion',
                'genero', 'estados_conservacion.nombre_estado_conservacion', 'estados.nombre_estado')
        .from('libros')
        .join('estados_conservacion', 'libros.estado_conservacion', '=',
            'estados_conservacion.id_estado_conservacion')
        .join('estados', 'libros.estado', '=', 'estados.id_estado')
        .where('eliminado', 1)
        .where('estado', 2)
        .then( libros => res.send(libros) );
}

function getLibro(req, res){
    knex.select('id_libro', 'codigo_isbn', 'nombre', 'editorial', 'autor', 'fecha_publicacion', 'genero',
                'estados_conservacion.nombre_estado_conservacion', 'estados.nombre_estado', 'eliminado')
        .from('libros')
        .join('estados_conservacion', 'libros.estado_conservacion', '=',
            'estados_conservacion.id_estado_conservacion')
        .join('estados', 'libros.estado', '=', 'estados.id_estado')
        .where('eliminado', 1)
        .where('id_libro', req.params.id)
        .then(libros => res.send(libros));
}