 用于定义高跷的库存信息的模型
 const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  reference: { type: String, required: true, unique: true },
  description: { type: String },
  category: { type: String, enum: ['Adult', 'Junior', 'Baby'] },
  hardness: { type: Number },
  model: { type: String, enum: ['Powerstrider', 'Seven Leage', 'PowerRiser'] },
  storageLocation: { type: String },
  condition: { type: String, enum: ['OK', 'KO'] },
  lastVerificationDate: { type: Date },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
