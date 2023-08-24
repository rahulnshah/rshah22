const express = require("express");
const router = express.Router();
const {ProjectsInaccesibleError} = require('./errors');
router.get('/', (req, res) => {
    res.render("index");
});

router.get('/my_projects', (req, res, next) => {
    // run fetch request
    const url = "https://api.github.com/search/repositories?q=" + encodeURIComponent('portfolio project in:readme user:rahulnshah');
        
    if(process.env.TOKEN === '')
    {
        throw new ProjectsInaccesibleError();
    }
    // read our json
    let fetchPromise = fetch(url, {
        method : "GET",
        headers : {
            "Accept" : "application/vnd.github+json",
            //hide this using ENV var
            "Authorization" : `Bearer ${process.env.TOKEN}`,
            "User-Agent" : "rahulnshah"
        }
    });
    
    fetchPromise
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        res.render("my_projects", {h1_text : "A Few of my creations", all_projects : data.items});
    })
    .catch(err => {
		next(err);
	});
});

module.exports = {router};