//basic settings and modules
const express = require('express')
const exphb = require('express-handlebars')
const bodyParser = require('body-parser')
const trashTalkGenerator = require('./trash_talk_generator')
const app = express()
const port = 3000

app.engine('handlebars', exphb({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

//routes
app.get('/', (req,res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    const result = trashTalkGenerator(req.body)
    res.render('index', { result })
})

app.listen(port, (req, res) => {
    console.log(`Trash talk generator: port ${port}`)
})