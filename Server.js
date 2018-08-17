const express = require('express');

const app =  express();
const bodyParser=require('body-parser');
app.use(bodyParser.json());
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'test'
  }
});
knex.select('*').from('users').then(data =>
	{
		console.log(data);
	});

const database ={
	users :[
	{ 
		id : '123',
		name :'Zack',
		email :'Zack@gmail.com',
		passwd :'cookie'
	},
	{
		id : '124',
		name :'Zoey',
		email :'Zoey@gmail.com',
		passwd :'milk'
	},
	{
		id : '125',
		name :'jim',
		email :'jim@gmail.com',
		passwd :'candy'
	}
	]
}


app.get('/',(req,res)=>
{
res.json("adfsdfdsf");
	//res.send("it works");
});
/*app.post('/Signin/:id',(req,res)=>
{
console.log(req.params);
	//res.send("it works");
});*/

//Trial

app.post('/Signin/:id',(req,res)=>
{
	const uid=req.params.id
knex('users').where({
  id: uid
}).select('id').then(data=>{
	if(data[0]!=undefined)
	{
	if(data[0].id==uid){
console.log(data);
	return res.json("welcome user "+ uid);
}
}
else

 return res.json("wrong input");


});
//console.log(data);
	//res.send("it works");
});


app.post('/Signin',(req,res)=>
{
	const {email , passwd}=req.params;
let flag=false;
const user = database.users.map((user) =>{
	if(user.passwd==passwd && user.email==email){
		flag=true;
	
	return res.json(req.body.passwd);}
})
if(flag==false)
		return res.status(400).json(req.params);


/*if(req.body.email==database.users[0].email && req.body.passwd==database.users[0].passwd)
{
	console.log(email);
}
else
res.json(req.query);*/
})

app.listen(3001);