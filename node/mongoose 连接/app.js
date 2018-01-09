const mongoose = require('mongoose')
let getConnection = function (opts) {
    mongoose.Promise = global.Promise
    let connect = mongoose.createConnection(`mongodb://${opts.server}:${opts.port}/${opts.db}`)
    return connect;
}

// create Schema constructor
let userSchema = new mongoose.Schema({
    name: String,
    password: {type: String, default: '123456'}
})

let localModel = getConnection({
    server:'localhost',
    port: '27017',
    db: 'users'
}).model('user', userSchema)
let instanceLocalModel = new localModel()
instanceLocalModel.name = 'zhang'
/*let promise = instanceLocalModel.save()
promise.then(function (doc) {
    console.log(doc)
})*/
instanceLocalModel.save(function (err) {
    if(err) throw err
    else console.log('ok')
})