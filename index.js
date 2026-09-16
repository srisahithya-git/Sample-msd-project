let express = require('express');
let hroutes = require('./routes/hr_routes');
let app = express();

app.use("/api/hr",hrroutes);

app.listen(3000,()=>{
    console.log("Server running on port 3000")
})