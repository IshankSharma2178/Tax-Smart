const mongoose = require('mongoose');

const ModulesSchema= new mongoose.Schema({
    email:{
        type:String,
        require:true,
    },
    module1:{
        completed:{
            type: 'boolean',
            default: false
        },
        module:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Module1",
        }
    },
    module2:{
        completed:{
            type: 'boolean',
            default: false
        },
        module:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Module2",
        }
    },
    module3:{
        completed:{
            type: 'boolean',
            default: false
        },
        module:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Module3",
        }
    },
    module4:{
        completed:{
            type: 'boolean',
            default: false
        },
        module:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Module4",
        }
    },
    module5:{
        completed:{
            type: 'boolean',
            default: false
        },
        module:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Module5",
        }
    },

})

module.exports=mongoose.model("Modules",ModulesSchema);