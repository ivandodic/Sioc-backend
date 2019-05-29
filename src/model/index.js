const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const model = module.exports;


model.User = mongoose.model('User', new Schema({
    username: {type: String},
    password: {type: String},
    email: {type: String},
    name: {type: String},
    surname: {type: String}
}, {collection: 'users', timestamps: true}));

model.Dwelling = mongoose.model('Dwelling', new Schema({
    publicationType: {type: String},
    address: {},
    occupationStatus: {type: String},
    generalDescription: {type: String},
    privateDescription: {type: String},
    type: {type: String},
    subtype: {type: String},
    currency: {type: String},
    price: {type: Number},
    legal: {
        bank: {type: String},
        prof: {type: String},
    },
}, {collection: 'dwelling', timestamps: true}));


model.Error = mongoose.model('Error', new Schema({}, {collection: 'logs.errors'}));
