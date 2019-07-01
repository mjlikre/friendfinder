
var express = require('express');
const router = express.Router();
const friends = require('../data/friends');


router.get('/', (req, res) => {
    res.json(friends);
})


// gets specific friend
// router.get('/:scores', (req, res)=>{
//     let matched = 0;

//     const found = friends.some(friends=>friends.name === req.params.name);
//     if (found){
//         res.json(friends.filter(friends => friends.name === req.params.name));

//     }else{
//         res.status(400).json({ msg: 'No friend with the name of Michael'});
//     }
// })
// gets specific friend

// create member

router.post('/', (req, res) =>{
  
    var newFriend = {
        name : req.body.name,
        photo : req.body.photo,
        scores : req.body.scores
    }
    friends.push(newFriend);  
    res.json(friends);
})

module.exports = router;
