var mongoose=require('mongoose');
var schema=require("../database/get_Schema");
var model=mongoose.model('admin',schema);
exports.get_model = model;