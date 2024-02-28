const exp = require('express');
const app = exp();
const path = require('path');
const logger = require('morgan')
app.use(logger('dev')); 


app.use(exp.urlencoded({extended: false})); 
app.use(exp.json())
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'./views')) //comentarios

app.use(exp.static(path.join(__dirname, './static')));  //comentarios

app.get('/saludar',(req,res)=>{
    let nombreCompleto = 'jose repelin cuchara';
    res.render('paginas/saludar', {
        "nombre" : nombreCompleto
    });
})

app.get('/listardepartamentos', (req,res)=>{
    // https://api-colombia.com/api/v1/Department
    fetch('https://api-colombia.com/api/v1/Department')
    .then(response => response.json()) //puedo poner .text() si lo 
    .then(data => {
        //console.log(data)
        res.render('paginas/listar',{ listaDepartamentos : data })             
    })
    

})

app.get('/registrarProducto', (req,res)=>{
    res.render('paginas/formularioProducto')
})

app.use(exp.urlencoded({extended: false})); 
app.use(exp.json())

app.post('/newProduct', (req,res)=>{
    req.body.nombreProducto 

})

app.get('/catalogo', (req,res)=>{
    
})

app.get('/', (req,res)=>{
    res.send('<h3>hola kevin</h3>');
});

app.listen(9090, ( )=>{
    console.log("servidor en linea");
} );