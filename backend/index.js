const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());


app.get("/para", async (req, res) => {
    const wordlen = req.query.n;
    // console.log(first);


    let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let para = "";
    let j = 0;
    let space = parseInt(Math.random() * 4) + 1;
    console.log(space);
    let count = 0;
    for (let i = 0; i < wordlen; i++) {
        //   j = i%26;
        let newNum = parseInt(Math.random() * 26 + 1);
        let rand = parseInt(Math.random() * newNum);
        j = rand % 26;
        para += alpha[j];
        count++;
        if (space === count) {
            para += " ";
            space = parseInt(Math.random() * 4) + 1;

            count = 0;
        }

    }

    para = para.trim();

    res.json({
        msg: para,
    })
})

app.listen(4141);