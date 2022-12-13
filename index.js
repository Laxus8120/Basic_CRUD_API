// what is express ? =>  It's a layer built on the top of the Node js that helps manage servers and routes.
const express =  require("express");
const bodyParser  = require("body-parser");
const app = express();

const PORT = 3001; 

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json()) //waht it do is , it set up the middle ware layer it gonna setuup a layer before you hit your api you hit this layer 
// lets mimic the data base so when ever we hit the server we gonna save it  here :)
let blogList = [];

app.get('/blogs', (req,res) =>{
    return res.status(200).json({    // this type of way of writing know as builder pattern it is a type of writng pattern .
        data : blogList,
        success : "true",
        name : "heamnt"
    })
});
app.post('/blogs',(res,req) => {   //for POST req who have to send the data in body param in POSTMAN 
    blogList.push({tittle : req.body.tittle , content  : req.body.content}) // the tittle and content are passed as body param in postman
    return app.status(200).json({
        success : "true"
    })
})
app.get('/blogs/:id',(res,req) =>{ // you can see the id in your URL , when you making the req in POSTMAN . 
    console.log(req.params);        // what ever you write inside colon(:) that will be the key and whatever the value you pass from the req is your value.(in url of POSTMAN)
 })

app.delete('/blogs/id', (res, req) =>{
    const result = blogList.filter((blog) => blog.id == req.params.id);// here blog gonna go with every entry of the array(bloglist), whatever entry follow the boolean is true it gonna execute that part only.    
    return res.status(200).json({
        success : true
    })
})
app.listen(PORT, () => {
    console.log("basic server started in PORT number ", PORT);
})
