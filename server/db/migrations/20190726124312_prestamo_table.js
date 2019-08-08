
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('prestamos', function(table){
        table.increments('id_prestamo');
        table.string('nombre_usuario', 200).notNullable();
        table.date('fecha_alquiler').notNullable();
        table.date('fecha_maxima_devolucion').notNullable();
    })
    .createTable('detalle_prestamos', function(table){
        table.increments('id_detalle_prestamo');
        table.integer('prestamo').notNullable();
        table.integer('libro').notNullable();
        table.date('fecha_devolucion').notNullable();
        table.foreign('prestamo').references('id_prestamo').inTable('prestamos');
        table.foreign('libro').references('id_libro').inTable('libros');
    })
};

exports.down = function(knex, Promise) {
  
};
