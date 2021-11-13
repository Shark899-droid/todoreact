import mongoose from 'mongoose';

const toDoSchema = mongoose.Schema({
  item: String,
  completed: { type: Boolean, default: false },
});

export default mongoose.model('toDoModel', toDoSchema);
