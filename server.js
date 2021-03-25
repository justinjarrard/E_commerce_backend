// require('dotenv').config()

// const express = require('express')
// const sequelize = require('./models/Product')
// // import sequelize connection

// const app = express()

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

// app.use(require('./routes'))

// // sync sequelize models to the database, then turn on the server
// require('./config/connection.js').sync()
//   .then(() => app.listen(process.env.PORT || 3000))
//   .catch(err => console.log(err))

const express = require('express')
// import sequelize connection
const sequelize = require('./config/connection.js')

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(require('./routes'))

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false })
  .then(() => { app.listen(PORT), () => { console.log('app is live on port 3000') } })