const express = require('express'); // Import thư viện express
require('dotenv').config()
const database = require(`./config/database.js`);

const routerApiVer1= require(`./api/v1/routers/index.router.js`)

database.connect();
const app = express(); // Tạo một ứng dụng express
const port = process.env.PORT; // Đặt cổng để server lắng nghe

//API routers
routerApiVer1(app);

// Bắt đầu server và lắng nghe trên cổng đã định nghĩa
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});