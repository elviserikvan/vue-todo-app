const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/vue_test_2', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', (err) => console.error(err));
db.on('open', () => console.log('Connected to database'));

const schema = new mongoose.Schema({
	title: {type: String, required: true},
	body: {type: String, required: true}
});

const model = mongoose.model('Todo', schema);

module.exports = model;
