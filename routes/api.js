const express = require('express');
const router = express.Router();
const Todos = require('../models/Model');


// Get all todos
router.get('/', (req, res) => {
	res.json('Fuck you');
});

// Get single todo
router.get('/:id',  async (req, res) => {
	let id = req.params.id;

	try {
		// Search for todo in the database
		let todo = await Todos.findById(id).exec();

		// If todo was not found
		if (todo == null) { res.json({error: true, message: `Todo with id '${id}' was not found` }); }

		// Otherwise send the wole todo
		else {res.json(todo);}


	} catch (e) {
	//	console.log(e);
		res.json({error: true, message: `There was an error with todo id ${id}`});
	}


});

// Save new todo
router.post('/', (req, res) => {
	console.log(req.body);

	// Save to the database
	new Todos(req.body).save((err, doc) => {
		if (err) {
			console.error(err);
			res.json({error: true, message: err.message})
		} 

		res.json(doc);
	});
});


module.exports = router;
