// index.js

/**
 * Required External Modules
 */

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = process.env.PORT || "8000";
// require our routes/index.js file
const {router} = require("./routes/index");
const { ProjectPageError } = require("./errors");

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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/**
 * Routes Definitions
 */

// Now let's tell our app about those routes we made!
app.use(router);

// catch 404 and forward to next error handler, which is the error logger
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// error logger
app.use((err, req, res, next) => {
    console.error('\x1b[31m', err) // adding some color to our logs
    next(err) // calling next middleware
});

// error responder 
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    if(err.status == 404)
    {
        res.render("404_page", {h1_text : err.message, err_status : err.status});
    }
    else if(err instanceof ProjectPageError)
    {
        if(err.type === "project details")
        {
            res.render("my_projects", {h1_text : "Projects", all_projects : []});
        }
    }
    else
    {
        return res.json({
            message: err.message
        });
    }
});

/**
 * Server Activation
 */
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});