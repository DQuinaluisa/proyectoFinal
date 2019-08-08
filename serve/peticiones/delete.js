var knex = require('../db/knex')

module.exports = {
    deleteLibro
};

function deleteLibro(req, res) {
    knex('docente').where('id_docente', req.params.id)
        .update({
            eliminado: req.body.eliminado
        })
        .then(() => {
            knex.select()
                .from('docentes')
                .then(libros => res.send(libros));
        })
}