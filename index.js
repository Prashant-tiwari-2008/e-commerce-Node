require('dotenv').config();
const port = process.env.PORT || 5000;
const { app } = require('./server');


app.listen(port, () => {
    console.log(`Server listing on port http://localhost:${port}`)
});