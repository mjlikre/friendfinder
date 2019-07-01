var express = require('express');
var path = require('path');



const app = express();
// const logger = (req, res, next) => {
//     console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
//     next();
// }
// app.use(logger);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
    



// friends api routes 
app.use('/api/friends', require('./app/routing/apiRoutes')) 
// app.get('/api/friends', (req, res) => {
//     res.json(friends);
// })
// app.post('/api/friends', (req, res) =>{
  
//     var newFriend = {
//         name : req.body.name,
//         photo : req.body.photo,
//         scores : req.body.scores
//     }
//     friends.push(newFriend);
//     res.json(friends);
// })

// to get to the html files

require('./app/routing/htmlRoutes.js')(app);






const PORT = process.env.PORT || 5000;



app.listen(PORT, ()=> console.log(`server started on ${PORT}`));

