const TaskRouter= require(`./task.router`);

module.exports= (app)=>{         //đây là cú phát common js có tác dụng giống với "export const RouteOfClient=()=>{} "

    const version = "/api/v1";
   app.use(version + "/tasks",TaskRouter);


    
}