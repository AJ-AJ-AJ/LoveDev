require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const { UsersModel } = require('./schema')
const { DeveloperModel } = require('./schema')


const felecia = new DeveloperModel ({
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVCA_wpyqcqpMJa6pjy_gMU6S-Ixh6XyX8Snlsw4g7mSEXOAp5Qg',
    firstName: 'Felecia',
    lastName: 'Genet',
    description: 'A full stack UI/UX designer and a tech blog writer for some of the most respected publications in the industry'
})

const byeFelecia = new DeveloperModel ({
    photo: 'https://cdn-hit.scadigital.io/media/17314/friday-felisha.jpg?preset=MainImage',
    firstName: 'Byefelecia',
    lastName: 'Genet',
    description: 'A full stack UI/UX designer and a tech blog writer for some of the most respected publications in the industry'
})

const gambino = new UsersModel ({
    username: 'im_childish',
    developers: [felecia,byeFelecia]
})

UsersModel.remove({})
    .then(() => gambino.save())
    .then(() => console.log('Gambino is in the building'))
    .then(() => mongoose.connection.close())