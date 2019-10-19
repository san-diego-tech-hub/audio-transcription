const express = require("express")

const app = express();

const port = 8080

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`App listening on PORT: ${port}`);
})