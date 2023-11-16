const express = require("express");
const router = express.Router();
const { ProjectsInaccessibleError } = require('../errors');
var nodemailer = require('nodemailer');
const { validate } = require('jsonschema');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const config = {
    service: "gmail",
    auth: {
        user: `${process.env.EMAIL}`,
        pass: `${process.env.PASS}`
    }
};

var nodemailerMailgun = nodemailer.createTransport(config);
// require the mail schema (a JSON file generated on jsonschema.net)
const mailSchema = require('../public/json/mailSchema.json');

router.get('/', (req, res) => {
    res.render("index");
});

router.get('/my_projects', async function (req, res, next) {
    try {

        if (!process.env.TOKEN) {
            throw new ProjectsInaccessibleError();
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

    // check if the current request.body payload is a valid mail
    const result = validate(req.body, mailSchema);

    // jsonschema validation results in a "valid" key being set to "false" if the instance doesn't match the schema
    if (!result.valid) {
        let errors = result.errors.map(error => error.stack.substring(error.stack.lastIndexOf(".") + 1));
        res.json({ contact_form_msgs: errors });
        return;
    }

    let mailOpts = {
        from: req.body.data.from,
        to: process.env.EMAIL,
        subject: req.body.data.subject,
        text: `${req.body.data.text}\n\nFrom: ${req.body.data.first_name} ${req.body.data.last_name}`
    };

    nodemailerMailgun.sendMail(mailOpts, function (err, response) {
        if (err) {
            next(err);
        }
        else {
            res.json({ contact_form_msgs: ["email sent!"] });
        }
    });
});

module.exports = { router };