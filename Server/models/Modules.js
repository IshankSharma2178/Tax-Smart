const mongoose = require('mongoose');

const ModulesSchema= new mongoose.Schema({
    module1:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Module1",
    },
    module2:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"module2",
    },
    module3:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"module3",
    },
    module4:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"module4",
    },
    module5:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"module5",
    },

})

module.exports=mongoose.model("Modules",ModulesSchema);