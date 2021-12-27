const express = require('express');
const PORT = process.env.PORT || 4001

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));