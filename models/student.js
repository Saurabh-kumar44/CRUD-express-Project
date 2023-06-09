import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    name : { type: String, required: true,trim:true},
    age :  {type:Number, required:true, min:18, max:60},
    fees : {type:mongoose.Decimal128, reqired:true, validate:(value)=>value >=5000.5},
})

//compiling model
const studentModel = mongoose.model('students',studentSchema);

export default studentModel;