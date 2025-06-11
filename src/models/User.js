const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['aluno', 'personal', 'saude', 'admin'], default: 'aluno' },
  deletedAt: { type: Date, default: null },
  gyms: [{
    gymId: { type: mongoose.Schema.Types.ObjectId, ref: 'Gym' },
    role: { type: String, enum: ['aluno', 'personal', 'saude'] }
  }]
}, { timestamps: true });

// Criptografar senha antes de salvar
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model('User', UserSchema);