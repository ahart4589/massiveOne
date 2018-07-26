module.exports = {
    getVacationPackages: (req,res) => {
        let db = req.app.get('db')
        db.getVacationPackages().then(response => {
        res.send(response)
    })
    },
    create: (req,res) => {
         // console.log(req.body)
        let db = req.app.get('db')
        let {location,price, description, image_url} = req.body
        db.createVacationPackage([location,price,description,image_url]).then (response =>{
            res.send(response)
        })
    },
    update: (req, res) => {
        let {location, price, description} = req.body
        let {id} = req.params
        let db = req.app.get('db')
        db.updateVacationPackage([location,price,description,id]).then(response => {
            res.send(response)
        })

    },
    remove: (req,res) => {
        let {id} = req.params
        let db = req.app.get ('db')
        db.removeVacationPackage(id).then(response => {
            res.send(response)
        })
    }

}