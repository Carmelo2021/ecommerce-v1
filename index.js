let modeloProducto = require('./backend/models/productos.model')

const exp = require('express');
const app = exp();

const logger = require('morgan')
app.use(logger('dev')); 

app.use(exp.urlencoded({extended: false})); 
app.use(exp.json())

app.listen(8777, ( )=>{  
    console.log("servidor en linea");
} );




const path = require('path');
app.use(exp.static(path.join(__dirname, './static')));  //comentarios
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'./frontend/views')) //comentarios
const router = require('./backend/routes/router');
app.use('/api/v1', router)

app.get('/productos', async (req,res)=>{
    console.log('entra')
    let listadoProductos = await modeloProducto.find();
    if(listadoProductos) 
        res.status(200).json(listadoProductos);
    else 
        res.status(404).json({error: "No se encontraron productos"});

});


app.get('/productos/:ref', async (req,res)=>{
    let productoEncontrado = await modeloProducto.findOne({referencia:req.params.ref});
    if(productoEncontrado)
        res.status(200).json(productoEncontrado);
    else
        res.status(404).json({"error":"Producto no encontrado"});
});


app.post('/productos', async(req,res)=>{
        const nuevoProducto = {
            referencia: req.body.referenciaProducto,
            nombre: req.body.nombreProducto,
            descripcion: req.body.descripcionProducto,
            precio: req.body.precioProducto,
            stock: req.body.stockProducto,
            imagen: req.body.imagenProducto,
            habilitado: true,
          };
        
        let Insercion= await modeloProducto.create(nuevoProducto);
        if(Insercion)
            res.status(200).json(
                            {   "mensaje":"registro exitoso",
                                "objeto Insertado":Insercion
                            });
        else
          res.status(404).json({"mensaje": "Se presentó un error"})
});


app.put('/producto/:ref', async (req,res)=>{
    const productoEditado = {
        referencia: req.params.ref,
        nombre: req.body.nombreProducto,
        descripcion: req.body.descripcionProducto,
        precio: req.body.precioProducto,
        stock: req.body.stockProducto,
        imagen: req.body.imagenProducto,
        habilitado: true,
      };
    
    let Actualizacion= await modeloProducto.findOneAndUpdate({referencia:req.params.ref},productoEditado);
    if(Actualizacion)
        res.status(200).json({"mensaje":"actualización exitoso"})
    else
      res.status(404).json({"mensaje": "Se presentó un error"})    

});



app.delete('/productos/:id', async (req,res)=>{
    console.log(req.params.ref , req.body.referenciaProducto)
    let eliminacion= await modeloProducto.findOneAndDelete({referencia:req.body.referenciaProducto});
    if(eliminacion)
        res.status(200).json({"mensaje":"eliminacion exitosa"})
    else
    res.status(404).json({"mensaje": "Se presentó un error"})    

});


