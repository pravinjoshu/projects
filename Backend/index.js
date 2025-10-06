const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const login = require('./module/login'); 

const app = express();
const PORT = 3000;


mongoose.connect('mongodb://localhost:27017/userdb')
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.log("Database disconnection", err);
  });

app.use(cors());
app.use(express.json());


app.post('/add-items', async (req, res) => {
  try {
    const loginData = new login(req.body);
    const result = await loginData.save();
    res.status(201).json({ msg: "Added successfully", data: result });
  } catch (error) {
    console.error("Error in POST /login:", error);
    res.status(500).json({ msg: "Error adding user", error });
  }
});

app.put('/item/:id', async (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;

  try {
    const user = await login.findByIdAndUpdate(userId, updatedData, { new: true });
    if (!user) return res.status(404).send({ message: 'User not found' });
    res.send(user);
  } catch (error) {
    res.status(500).send({ message: 'Error updating user', error });
  }
});


app.get('/items', async (req, res) => {
  try {
    const users = await login.find(); 
    res.status(200).json({msg:"successfully",users});
  } catch (error) {
    res.status(500).json({ msg: "Error fetching users", error });
  }
});
app.delete('/delete/:id', async (req, res) => {

   try {
        const {id} = req.params
         const getData =await login.findByIdAndDelete(id)

        if(getData){
            res.send({"msg":"delete successfully"})
            
        } else{
            res.send({"msg":"not items added"})
        }
        
    } catch (error) {
        res.send({"msg":error})
    }
});


app.get('/item/:id',async(req,res)=>{
    try {
        const {id} = req.params
         const getData =await login.findById(id)

        if(getData){
            res.send({"msg":"successfully"})
            
        } 
    } catch (error) {
        res.send({"msg":error})
    }
})


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
