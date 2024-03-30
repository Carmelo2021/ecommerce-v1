const modeloProducto = require('../models/productos.model')


exports.listarProductos = async (req,res)=>{
    let listadoProductos = await modeloProducto.find();
    if(listadoProductos) 
        res.status(200).json(listadoProductos);
    else 
        res.status(404).json({error: "No se encontraron productos"});

};
    /*
     res.render('paginas/listarProductos',
        {
            "listadoProductos":listadoProductos
        }
        ); */

/*
app.get('/buscarProducto/:ref', async (req,res)=>{
    let productoEncontrado = await modeloProducto.findOne({referencia:req.params.ref});
    if(productoEncontrado)
        res.status(200).json(productoEncontrado);
    else
        res.status(404).json({"error":"Producto no encontrado"});
    
   /*
    if(productoEncontrado)
        res.status(200).render('paginas/buscarProducto', {"productoEncontrado":productoEncontrado});
    else
        res.status(404).render('paginas/buscarProducto', {"error":"Producto no encontrado"});
       
    });

app.get('/pruebainsertar',(req,res)=>{
    res.render('paginas/formularioProducto')
});

app.post('/insertarProducto', async(req,res)=>{
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
            res.status(200).json({"mensaje":"registro exitoso"})
        else
          res.status(404).json({"mensaje": "Se presentó un error"})
    });

app.get('/pruebaeditar',(req,res)=>{
        res.render('paginas/editarProducto')
   });

app.post('/editarProducto', async (req,res)=>{
    const productoEditado = {
        referencia: req.body.referenciaProducto,
        nombre: req.body.nombreProducto,
        descripcion: req.body.descripcionProducto,
        precio: req.body.precioProducto,
        stock: req.body.stockProducto,
        imagen: req.body.imagenProducto,
        habilitado: true,
      };
    
    let Actualizacion= await modeloProducto.findOneAndUpdate({referencia:req.body.referenciaProducto},productoEditado);
    if(Actualizacion)
        res.status(200).json({"mensaje":"actualización exitoso"})
    else
      res.status(404).json({"mensaje": "Se presentó un error"})    

})

app.get('/pruebaeliminar',(req,res)=>{
    res.render('paginas/eliminarProducto')
});

app.post('/eliminarProducto', async (req,res)=>{
    console.log(req.params.ref , req.body.referenciaProducto)
    let eliminacion= await modeloProducto.findOneAndDelete({referencia:req.body.referenciaProducto});
    if(eliminacion)
        res.status(200).json({"mensaje":"eliminacion exitosa"})
    else
    res.status(404).json({"mensaje": "Se presentó un error"})    

})

    
*/