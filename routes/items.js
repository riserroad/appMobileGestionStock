const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// GET /items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find({});
    res.send(items);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// POST /items
router.post('/', async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    res.send(newItem);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// GET /items/:reference
router.get('/:reference', async (req, res) => {
  try {
    const item = await Item.findOne({ reference: req.params.reference });
    if (!item) {
      return res.status(404).send('Item not found');
    }
    res.send(item);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// PUT /items/:reference
router.put('/:reference', async (req, res) => {
  try {
    const item = await Item.findOneAndUpdate({ reference: req.params.reference }, req.body, { new: true });
    if (!item) {
      return res.status(404).send('Item not found');
    }
    res.send(item);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// DELETE /items/:reference
router.delete('/:reference', async (req, res) => {
    try {
      const item = await Item.findOneAndDelete({ reference: req.params.reference });
      if (!item) {
        return res.status(404).send('Item not found');
      }
      res.send(item);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  });
