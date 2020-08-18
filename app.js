const PORT = process.env.PORT || 3000;
const path = require('path');
const express = require('express');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', require('./routes/api'));

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
