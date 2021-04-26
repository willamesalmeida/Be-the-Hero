const expres = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = expres();

app.use(cors());
app.use(expres.json());
app.use(routes);

app.listen(3333);

