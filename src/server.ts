import app from "./app";
import db from "./database/models/index";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    db.sequelize.sync();
    console.log(`Listening on ${PORT}...`);
});