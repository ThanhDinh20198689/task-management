const express = require('express'); // Import thư viện express
require('dotenv').config()
const database = require(`./config/database.js`);

const Task= require(`./model/task.model.js`);


database.connect();
const app = express(); // Tạo một ứng dụng express
const port = process.env.PORT; // Đặt cổng để server lắng nghe


app.get('/tasks', async (req, res) => {
  const tasks =await Task.find({
    deleted: false
  })

  console.log(tasks);
  // res.send('Danh sach cong viec');
  res.json(tasks);
});

app.get('/tasks/detail/:id', async (req, res) => {
  const id= req.params.id;
  const tasks =await Task.find({
    _id:id,
    deleted: false
  })

 
  res.json(tasks);
});

// Bắt đầu server và lắng nghe trên cổng đã định nghĩa
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});