const errorHandler = (res, error) => {
    if (error.response) {
    

      const status = error.response?.status || 500; 

      const message = error.message || error.response?.data.message || "Unknown error";

      res.status(status).json({ error: message });

    } else if (error.request) {


      res.status(500).json({ error: "Request failed" });

    } else {
    
      res.status(500).json({ error: error.message || "Internal Server Error" });
      
    }
  };
  
  module.exports = { errorHandler };
  