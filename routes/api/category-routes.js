const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Gets all the categories and their associated products
router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
  .then(dbCategoryData => {
    // no categories were found
    if(!dbCategoryData.length) {
      res.status(404).json({message: 'No categories found'});
      return;
    }
    // categories were found
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// Gets a specific category and its associated products
router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
  .then(dbCategoryData => {
    // The category was not found
    if(!dbCategoryData) {
      res.status(404).json({message: 'No category found with this id'});
      return;
    }
    // the category was found
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// Creates a new category, but checks first that the category doesn't exist yet
router.post('/', (req, res) => {
  // create a new category
  
  // Search if category exists
  Category.findOne({
    where: {
      category_name: req.body.category_name
    }
  })
  .then(dbCategoryData => {
    // category was found
    if(dbCategoryData) res.json({message: `The category ${req.body.category_name} already exists`})
    // category not found, so create new category
    else {
      Category.create(req.body)
      .then(newCategory => res.json(newCategory))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});


// Updates a category
router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(dbCategoryData => res.json(dbCategoryData);)
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// Deletes a category
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbCategoryData => {
    // The category was not found
    if(!dbCategoryData) {
      res.status(404).json({message: 'No category found with this id'});
      return;
    }
    // the category was found
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })

});

module.exports = router;
