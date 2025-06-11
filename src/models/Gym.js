const mongoose = require('mongoose');

const GymSchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  members: [{
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    role: { type: String, enum: ['aluno', 'personal', 'saude','ADM'] }
  }]
}, { timestamps: true });

module.exports = mongoose.model('Gym', GymSchema);