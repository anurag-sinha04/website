const { response } = require("express");
const { insertdata } = require("../models/insert_data_model");

let insert_data = (req,res)=>{
    let {email,name,Class,phone} = req.body;
    let data = new insertdata({
        email,
        name,
        Class,
        phone
    })
    data.save().then(()=>{
        res.send({status:1,message:"Data Saved","Response":response})
    })
}

module.exports = {insert_data}