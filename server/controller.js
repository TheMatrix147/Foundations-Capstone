let database = []

module.exports = {

    addGoal: (req, res) => {
        database.push(req.body)
        res.status(200).send(database)
    },
    getGoals: (req, res) => {
        res.status(200).send(database) 
    }
}
