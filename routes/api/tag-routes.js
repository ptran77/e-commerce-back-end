const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Gets all tags
router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
  .then(dbTagData => {
    // no categories were found
    if(!dbTagData.length) {
      res.status(404).json({message: 'No products found'});
      return;
    }
    // categories were found
    res.json(dbTagData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// Gets one tag by id
router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
  .then(dbTagData => {
    // no categories were found
    if(!dbTagData) {
      res.status(404).json({message: 'No tag found with this id'});
      return;
    }
    // categories were found
    res.json(dbTagData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then(newTag => res.json(newTag))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
  })
});

// Updates a tag
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(dbTagData => {
    // The tag was not found
    if(!dbTagData) {
      res.status(404).json({message: 'No tag found with this id'});
      return;
    }
    // the tag was found
    res.json(dbTagData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});


// Deletes a tag
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(dbTagData => {
    // The tag was not found
    if(!dbTagData) {
      res.status(404).json({message: 'No tag found with this id'});
      return;
    }
    // the tag was found
    res.json(dbTagData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

module.exports = router;
