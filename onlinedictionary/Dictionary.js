const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const conn = require('./word');
const app = express();
app.use(express.json());
app.use(cors());

const config = mysql.createConnection(conn);

app.get('/word', function (req, res) {
    // console.log('calling server...' + req.query.word);
    const word = req.query.word;
    console.log('calling server...' + word);
    config.connect(function (err) {
        // if (err) throw err;
        if (err) console.log(err.message);
        console.log("connected");
        const squery = config.query(`SELECT * FROM entries where word = '${word}'  `, function (err, result) {
            // if (err) throw err;
            console.log('end of query');
            if (err) console.log(err.message);
            res.json(result);




        })
    })

})




app.listen(3000, () => {
    console.log('server running on http://localhost:3000');
})

