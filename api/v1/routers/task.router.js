const express= require("express");// nhung module của framework Express vào chương trình
const router=express.Router();//tạo ra 1 nhánh con của đối tượng ứng dụng Express chính "app"

const Task= require(`../../../model/task.model.js`);

router.get('/', async (req, res) => {
    const tasks =await Task.find({
      deleted: false
    })
  
    console.log(tasks);
    // res.send('Danh sach cong viec');
    res.json(tasks);
  });
  
  router.get('/detail/:id', async (req, res) => {
    const id= req.params.id;
    const tasks =await Task.find({
      _id:id,
      deleted: false
    })
  
   
    res.json(tasks);
  });


module.exports = router;  // router sẽ sử dụng những phương thức vừa đc gắn vào