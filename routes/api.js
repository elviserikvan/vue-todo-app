const express = require('express');
const router = express.Router();
const Todos = require('../models/Model');


// Get all todos
router.get('/', async (req, res) => {

	try {
		let todos = await Todos.find().exec();
		res.json(todos);
	} catch (e) {
		res.json({error: true, message: `Unknown Error`});

	}

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

	// Save to the database
	new Todos(req.body).save((err, doc) => {
		if (err) {
			console.error(err);
			res.json({error: true, message: err.message})
		} 

		res.json(doc);
	});
});

// Update Todo
router.put('/:id', async (req, res) => {
	let id = req.params.id;

	try {

		let todo = await Todos.findOne({_id: id});

		// Update the todo
		if (todo != null) {
			todo.title = req.body.title;
			todo.body = req.body.body;

			await todo.save();

			res.json(todo);

		}
		else {
			res.json({error: true, message: `Todo with id '${id}' was not found` });
		}

	} catch(e) {
		console.log(e);
		res.json({error: true, message: `There was an error with todo id ${id}`});

	}
});

// Delete Todo
router.delete('/:id', async (req, res) => {
	let id = req.params.id;

	try {
		let doc = await Todos.deleteOne({_id: id});

		if (doc.deletedCount > 0 ) { res.json({status: 'success'}); }
		else { res.json({status: 'failed'}) }

	} catch (e) {
		res.json({error: true, message: `There was an error with todo id ${id}`});

	}

});

module.exports = router;
