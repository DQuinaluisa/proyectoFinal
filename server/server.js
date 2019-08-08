var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var cors = require('cors');
app.use(cors());

var getBook = require('./peticiones/get');
app.get('/libro', getBook.getLibros);
app.get('/libro/:id', getBook.getLibro);
app.get('/estado-conservacion', getBook.getEstadoConservacion);
app.get('/libro-alquilado', getBook.getLibroAlquilado);

var postBook = require('./peticiones/post');
app.post('/libro', postBook.addLibro);

var putBook = require('./peticiones/put');
app.put('/libro/:id', putBook.editLibro);
app.put('/alquilar-libro/:id', putBook.alquilarLibro);
app.put('/devolver-libro/:id', putBook.devolverLibro);

var deleteBook = require('./peticiones/delete');
app.put('/delete-libro/:id', deleteBook.deleteLibro);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
