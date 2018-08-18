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
var d_id=0;;
knex.select('*').from('users').then(data =>
	{
		console.log(data);
	});

app.get('/',(req,res)=>
{
res.json("adfsdfdsf");
	//res.send("it works");
});

app.post('/Signin/:id',(req,res)=>
{
	const uid=req.params.id
knex('users').where({
  id: uid
}).select('id').then(data=>{
	if(data[0]!=undefined)
	{
	if(data[0].id==uid){
		d_id=uid;
		//flag=true;

knex('submissions').where({
  u_id: d_id
}).select('u_id').then(data2=>{
	if(data2[0]==undefined){

		knex('submissions').insert({u_id: d_id}).then(data =>
	{
		//console.log(data);
	});
		knex.select('*').from('submissions').then(data =>
	{
		console.log(data);
	});
	}});
console.log(data,d_id);
	return res.json("welcome user "+ uid);
}
}
else

 return res.json("wrong input");
});
//console.log(data);
	//res.send("it works");
});

	app.post('/Home/:id',(req,res)=>
{
	console.log(d_id);

	const q_id=req.params.id;
	var {a} = req.body;
console.log(q_id,a);
if(d_id!=0)
{
	knex('answers').where({
  id: q_id
}).select('ans').then(data=>{
console.log(data);
	if(data[0]!=undefined)
	{
	if(data[0].ans==a){
console.log(data,a);
knex('submissions')
.where('u_id','=',d_id)
.update({
  	ans1:1
}).then(data=>{})
	return res.json("welcome user "+ q_id);

}
else
res.json("Wrong answer");
}
else
return res.json("wrong input");
});
}
else
res.json("wrong");	
});

app.listen(3001);
