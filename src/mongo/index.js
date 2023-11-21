import express from "express";
import {randomUUID} from "crypto";
const DATA=[];
const app=express();
app.use(express.json());
app
.route("/")
.get((req,res)=>{
    res.json(DATA);
})
.post((req,res)=>{
    const {body}=req;
    if(body.data){
        const newObject={
            id:randomUUID(),
            content : body.data,
            createdAt:new Date(),

        };
        DATA.push(newObject);
        res.sendStatus(200);
    }else{
        res.sendStatus(200);
    }
      
    
});
app.get('/:id',(req,res)=>{
    const id = parsInt(req.params.id);
    const item = DATA.find((item)=> item.id ===id);
    if(item){
        res.json(item);
    }else{
        res.sendStatus(400)
    }


});
app.delete('/:id',(req,res)=>{
    const ids = parseInt(req.params.id);
    DATA = DATA.filter((item)=> item.id !==ids);
    res.json({message: 'datadeleted'});
});
app.listen(3000,()=>{
    console.log("server is working on 3000");

});