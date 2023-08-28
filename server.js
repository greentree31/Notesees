const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
//Initializing the app and creating a PORT
const app = express();

app.get('/', (request, response) => {
    response.send('Hello World');
})
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', apiRoutes);
app.use('/', htmlRoutes);
//Starting the server on the PORT
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));