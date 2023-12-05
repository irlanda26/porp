const express=require('express');
const app=express();
const mysql=require('mysql');
const cors=require('cors');

app.use(cors());
app.use(express.json());
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'muscleup'
    
});
app.post('/create',(req,res)=>{
    const rutina=req.body.rutina;
    const ejercicios=req.body.ejercicios;
    const duracion=req.body.duracion;
    db.query('INSERT INTO rutinas(rutina, ejercicios, duracion) VALUES (?,?,?)',[rutina, ejercicios, duracion],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send('rutina registrada');
        }
    })
})
app.put('/update',(req,res)=>{
    const rutina=req.body.rutina;
    const ejercicios=req.body.ejercicios;
    const duracion=req.body.duracion;
    const id=req.body.id;
    db.query('UPDATE rutinas SET rutina=?, ejercicios=?, duracion=? where id=?', [rutina, ejercicios, duracion, id],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send('datos actualizados');
        }
    })
})
app.get('/muscleup', (req,res)=>{
    db.query('SELECT * FROM rutinas',
    (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
});
app.delete('/delete/:id',(req,res)=>{
    const id=req.params.id;
    db.query('DELETE FROM rutinas WHERE id=?', id,
    (err,result)=>{
        if(err){
            console.log;
        }else{
            res.send('rutina eliminada')
        }
    })
})
app.listen(3001,()=>{
    console.log('Corriendo en el puerto 3001');
});