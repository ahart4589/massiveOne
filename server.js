const express = require ('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()

const app = express()
const port = 3005

let VPCtrl = require('./controllers/vacationPackagesCtrl')

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
}).catch(err => {
    console.log('there was an error connecting to db:', err)
})
// console.log(process.env.CONNECTION_STRING)
app.use(bodyParser.json())

app.get('/api/vacations',VPCtrl.getVacationPackages)
app.post('/api/vacations', VPCtrl.create)
app.put('/api/vacations/:id', VPCtrl.update)
app.delete('/api/vacations/:id', VPCtrl.remove)

app.listen(port, () => {
    console.log('listening on port:', port)
})