var express = require('express');
var path = require('path');



const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
    




app.use('/api/friends', require('./app/routing/apiRoutes')) 


require('./app/routing/htmlRoutes.js')(app);






const PORT = process.env.PORT || 5000;



app.listen(PORT, ()=> console.log(`server started on ${PORT}`));

