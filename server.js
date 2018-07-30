const express=require("express")
const app=express()
const nodemailer=require("nodemailer")

app.use('/',express.static(__dirname + '/public_static'))
app.get("/search",(req,res)=>
{
    console.log(req.query['firstname'])
   
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'sabbystudycentrestudents@gmail.com',
               pass: 'sabbysir'
           }
       });
       const mailOptions = {
        from: 'sabbystudycentrestudents@gmail.com', // sender address
        to: 'sabbystudycentre123456@gmail.com', // list of receivers
        subject: 'Subject of your email', // Subject line
        html: `${req.query["firstname"]} 
        ${req.query["lastname"]} 
         ${req.query["subject"]}` ,
        // plain text body
      };
      transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
     });




  // res.send("YOU HAVE REGISTERED")
  res.send(console.log("URL REGISTERD "))
})

app.listen(5444,function()
{
    console.log(`SERVER HAS STARTED 
    http://localhost:5444
    `)
})








