const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    const about ={
        avatar_url: 'https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4',
        name: 'Mayk Brito',
        role: 'Instrutor Rocketseat',
        description: 'Programador full-stack, focado em trazer o melhor ensino para iniciantes em programação. Colaborador da <a href="https://rocketseat.com.br/" target="_blank">Rocketseat</a>',
        links: [
            { name: 'Github', url: 'htpps://github.com/maykbrito/' },
            { name: 'Twitter', url: 'https://twitter.com/maykbrito/' },
            { name: 'Linkedin', url: 'https://www.linkedin.com.br/in/maykbrito/' }
        ]
    }
    return res.render("about", {about}) //{about} = {about: about}
})

server.get("/portifolio", function(req, res){
    return res.render("portifolio", {items: videos})
})

server.get("/video", function (req,res){
    const id = req.query.id

    const video = videos.find(function(video){        
        return video.id == id        
    })

    if (!video){
        return res.send('Video not found!')
    }
       
    return res.render('video', {item:video})
})

server.listen(5000, function(){
    console.log('server is running');
    
})