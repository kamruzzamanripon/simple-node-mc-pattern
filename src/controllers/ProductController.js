
module.exports = class ProductController{

    static testProduct = async(req, res)=>{

        try{
            
            return res.status(200).json({
              code: 200,
              message: "Test Product api call",
              data: "Test Product api call",
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