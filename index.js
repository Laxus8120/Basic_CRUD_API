// what is express ? =>  It's a layer built on the top of the Node js that helps manage servers and routes.
const express =  require("express");
const bodyParser  = require("body-parser");
const { json } = require("body-parser");
const app = express();

const PORT = 3000; 

app.use(bodyParser.urlencoded({extended : true}));// now you can read t
app.use(bodyParser.json()) //you can parse the data in json(output = {}(empty json)) but you can read it so u need one more middleware #urlencoded done above.
                            //waht it do is , it set up the middle ware layer it gonna setuup a layer before you hit your api you hit this layer 

let blogList = [];// lets mimic the data base so when ever we hit the server we gonna save it  here :)

function logger(req,res,next){
    console.log(req.url);
    console.log(req.body);
    next();
}
function authen(req, res,next){
    console.log("Yes user is authenticated");
}
app.get('/blogs',logger,authen, (req,res) =>{ // NOw, here we send the middlewares, the first middleware is logger then logger consist the next which point to the 
                                                // next middleware authen and next of authen middleware point the controller fucntion (req,res)
    return res.status(200).json({    // this type of way of writing know as builder pattern it is a type of writng pattern .
        data : blogList,
        success : "true",
        name : "heamnt",
        message : "get method called "
    })
});
app.post('/blogs',(req,res) => {   //for POST req who have to send the data in body param in POSTMAN 
    console.log("post method called ");
    blogList.push({ Tittle: req.body.tittle , content: req.body.content, user: req.body.id});
    return res.status(201).json({
        message : " success"
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
