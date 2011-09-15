var express = require('express')
,   form = require('connect-form')
,   app = module.exports = express.createServer()

app.configure(function() {
    app.set('views', __dirname + '/views')
    app.set('view engine', 'ejs')
    app.use(form({ keepExtensions: true, uploadDir: __dirname + '/public/images' }))
    app.use(express.logger())
    app.use(express.bodyParser())
    app.use(express.methodOverride())
    app.use(express.static(__dirname + '/public'))
    app.use(app.router)
})
