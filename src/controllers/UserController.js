
module.exports = class UserController{

        static testUser = async(req, res)=>{

            try{
                
                return res.status(200).json({
                  code: 200,
                  message: "Test User api call",
                  data: "Test User api call",
                });
      
            }catch(error){
              res.status(501).json({
                code: 501,
                message: error.message,
                error: true,
              });
            }
        }
        
}