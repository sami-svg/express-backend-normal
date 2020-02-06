const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const db={
	user:[
		{	
			id:"1",
			name:"samia",
			email:"samia@gmail.com",
			password:"cookies",
			entries:0,
			Joined:new Date()
		},
		{	
			id:"2",
			name:"sami",
			email:"sami@gmail.com",
			password:"cookie",
			entries:0,
			Joined:new Date()
		},
		{
			id:"3",
			name:"sam",
			email:"sam@gmail.com",
			password:"cooki",
			entries:0,
			Joined:new Date()
		}
	]
}

app.get('/', (req, res) =>{
  res.send(db)
})

app.post('/register', (req, res) =>{
 	const {name,email,password}=req.body;

 		db.user.push({
 			id:"4",
 			name:name,
			email:email,
			password:password,
			entries:0,
			Joined:new Date()
 	})
 		res.json(db.user[db.user.length-1])
})

app.get('/profile/:id', (req, res) =>{
  const {id}=req.params;
  let found=false;
  db.user.forEach(user=>{
  	if(id===user.id){
  		found=true;
  		return res.json(user);
  		}
  	}
  )
  if(!found){
 		res.json("cannot get"); // avabe na die direct res.status(400) dile "Cannot set headers after they are sent to the client" avabe lekha ashe 
 	}
})

app.put('/images', (req, res) =>{
  const {id}=req.body;
  let found=false;
  db.user.forEach(user=>{
  	if(id===user.id){
  		found=true;
  		user.entries++;
  		return res.json(user.entries);
  		}
  	}
  )
  if(!found){
 		res.json("cannot get"); // avabe na die direct res.status(400) dile "Cannot set headers after they are sent to the client" avabe lekha ashe 
 	}
})


app.post('/signin', (req, res) =>{
  const {email,password}=req.body;
  let found=false;
  db.user.forEach(user=>{
  	if(email===user.email && password===user.password){
  		found=true;
  		return res.json("signing");
  		}
  	}
  )
  if(!found){
 		res.json("error signing in "); // avabe na die direct res.status(400) dile "Cannot set headers after they are sent to the client" avabe lekha ashe 
 	}
})



app.listen(3000,()=>{
	console.log("app is running on port 3000")
})