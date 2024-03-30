const mongoose = require("../config/database");

// los nombres y tipos deben coincidir con los datos en la bd que ya se encuentran almacenados
const schemaProducto = new mongoose.Schema({
  referencia: {
    type: Number,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
  },
  imagen: {
    type: String,
    required: true,
  },
  habilitado: {
    type: Boolean,
  },
});

const producto = mongoose.model("producto", schemaProducto);
module.exports = producto;