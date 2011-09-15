var app = require('./config')
,   fs  = require('fs')
,   img = require('path').join(__dirname, 'public', 'images')


app.get('/', function(req, res) {
    fs.readdir(img, function(err, images) {
        res.render('index.ejs', {images:images})
    })
})

app.post('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-With")
    req.form.complete(function(err, fields, files) {
        err ? next(err) : res.redirect('/')
    })
})

app.listen(process.env.PORT || 3000)
