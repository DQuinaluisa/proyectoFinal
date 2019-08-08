exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('docente').del()
        .then(function() {
            // Inserts seed entries
            return knex('docente').insert([
                { cedula: '17505541149', apellido_paterno: 'Bedon', apellido_materno: 'Cordero', nombre1: 'Alan', nombre2: 'Maykel', correo_insti: 'amc.bedon@yavirac.edu.ec,', contrato: 'completo', n_horas: '24' },
                { cedula: '17505541149', apellido_paterno: 'Bedon', apellido_materno: 'Cordero', nombre1: 'Alan', nombre2: 'Maykel', correo_insti: 'amc.bedon@yavirac.edu.ec,', contrato: 'completo', n_horas: '24' },
                { cedula: '17505541149', apellido_paterno: 'Bedon', apellido_materno: 'Cordero', nombre1: 'Alan', nombre2: 'Maykel', correo_insti: 'amc.bedon@yavirac.edu.ec,', contrato: 'completo', n_horas: '24' },
                { cedula: '17505541149', apellido_paterno: 'Bedon', apellido_materno: 'Cordero', nombre1: 'Alan', nombre2: 'Maykel', correo_insti: 'amc.bedon@yavirac.edu.ec,', contrato: 'completo', n_horas: '24' },
                { cedula: '17505541149', apellido_paterno: 'Bedon', apellido_materno: 'Cordero', nombre1: 'Alan', nombre2: 'Maykel', correo_insti: 'amc.bedon@yavirac.edu.ec,', contrato: 'completo', n_horas: '24' },
                { cedula: '17505541149', apellido_paterno: 'Bedon', apellido_materno: 'Cordero', nombre1: 'Alan', nombre2: 'Maykel', correo_insti: 'amc.bedon@yavirac.edu.ec,', contrato: 'completo', n_horas: '24' },
                { cedula: '17505541149', apellido_paterno: 'Bedon', apellido_materno: 'Cordero', nombre1: 'Alan', nombre2: 'Maykel', correo_insti: 'amc.bedon@yavirac.edu.ec,', contrato: 'completo', n_horas: '24' },
                { cedula: '17505541149', apellido_paterno: 'Bedon', apellido_materno: 'Cordero', nombre1: 'Alan', nombre2: 'Maykel', correo_insti: 'amc.bedon@yavirac.edu.ec,', contrato: 'completo', n_horas: '24' },
                { cedula: '17505541149', apellido_paterno: 'Bedon', apellido_materno: 'Cordero', nombre1: 'Alan', nombre2: 'Maykel', correo_insti: 'amc.bedon@yavirac.edu.ec,', contrato: 'completo', n_horas: '24' },
                { cedula: '17505541149', apellido_paterno: 'Bedon', apellido_materno: 'Cordero', nombre1: 'Alan', nombre2: 'Maykel', correo_insti: 'amc.bedon@yavirac.edu.ec,', contrato: 'completo', n_horas: '24' },
            ]);
        });
};