const express = require('express')
const path = require('path')
const log =console.log
const app= express()
const hbs = require('hbs')

const port= process.env.port || 3000

//static dir path
const staticPath = path.join(__dirname,"../public")
const partialPath = path.join(__dirname,"../parts")
//engine name
app.set('view engine','hbs')

app.use(express.static(staticPath))

hbs.registerPartials(partialPath)

// log(path.join(__dirname,"../public"))

app.get('' , (req,res) => {
      res.render('index' , {title:"Weather App ", name:"erum" , hvar:" header variable"  })
} )

app.get('/about' , (req,res) => {
      res.render('about' , {title:"About section  ", name:"erum" , hvar:" header variable"  })
} )

app.get('/api' , (req,res) => {
      

      if(!req.query.coin){
            return res.send( { error: ' coin query empty .... '})
      }

      res.send({

            Result: ' found the coin query ',
            coin: req.query.coin

      })

} )


// const port = 3000

// app.get('', (req,res)=> {  res.send( 

// {  model:"Motorola", ram: "6GB"}


//  )  })


// app.get('/about', (req,res)=> {  res.send( '   help page  ')  })



app.listen(port , ()=> {
      log(' server is up on port 3000')
})