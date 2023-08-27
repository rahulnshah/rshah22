const express = require("express");
const router = express.Router();
const { ProjectsInaccesibleError } = require('../errors');
var nodemailer = require('nodemailer');

const config = {
    service: "gmail",
    auth: {
        user: "rahulnshah24@gmail.com",
        pass: "dsiglhqjduqxuufc"
    }
};

var nodemailerMailgun = nodemailer.createTransport(config);

router.get('/', (req, res) => {
    res.render("index");
});

router.get('/my_projects', async function (req, res, next) {
    try {

        if (!process.env.TOKEN) {
            throw new ProjectsInaccesibleError();
        }

        // run fetch request
        const url = "https://api.github.com/search/repositories?q=" + encodeURIComponent('portfolio project in:readme user:rahulnshah');

        let response = await fetch(url, {
            method: "GET",
            headers: {
                //hide this using ENV var
                "Authorization": `Bearer ${process.env.TOKEN}`
            }
        });

        // read our json
        let data = await response.json();

        res.render("my_projects", { h1_text: "Projects", all_projects: data.items });

    }
    catch (err) {
        next(err);
    }
});

router.post('/api/email', function (req, res, next) {
    let { from, to, subject, text } = req.body;
    const data = { from, to, subject, text };
    nodemailerMailgun.sendMail(data, function (err, response) {
        if (err) {
            next(err);
        }
        else {
            res.send('email sent!');
        }
    });
});

module.exports = { router };