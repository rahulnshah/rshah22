// index.js

/**
 * Required External Modules
 */
// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || "8000";
// const GitHubRepository = require('./public/scripts/githubRepo');
if(process.env.NODE_ENV !== 'production')
{
    require('dotenv').config();
}
/**
 *  App Configuration
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

/**
 * Routes Definitions
 */
app.get('/', (req, res) => {
    res.render("index");
});

app.get('/my_projects', (req, res, next) => {
    // run fetch request
    const url = "https://api.github.com/search/repositories?q=" + encodeURIComponent('portfolio project in:readme user:rahulnshah');
        
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
        res.render("my_projects", {h1_text : "A Few of my creations", all_projects : data});
    })
    .catch(err => {
		next(err);
	});
});
// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

/**
 * Server Activation
 */
// error handlers
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    if(err.status == 404)
    {
        res.render("404_page", {h1_text : err.message, err_status : err.status});
    }
    return res.json({
      message: err.message
    });
});

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});