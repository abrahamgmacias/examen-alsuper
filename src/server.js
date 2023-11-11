const { app } = require('./app');
const db = require("./database/models/index");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    db.sequelize.sync();
    console.log(`Listening on ${PORT}...`);
});